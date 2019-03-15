var express = require("express");
var app = express();
var path = require('path')
require('dotenv').config();
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var path = require('path');
require('dotenv').config();
const assert = require('assert');

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds111441.mlab.com:11441/eye-tracker`
const dbName = 'eye-tracker';
const client = new MongoClient(url, { useNewUrlParser: true });

var db;

client.connect(function (err) {
    assert.equal(null, err);
    db = client.db(dbName);
    console.log('Connected successfully to server');
})

// Middleware function to check if the user has a valid token stored locally
function verifyToken(req, res, next) {
    var token = req.body.token;
    if (token) {
        jwt.verify(token, "Secret", (err, decode) => {
            if (err) {
                res.send("Wrong token")
            } else {
                res.locals.decode = decode
                next();
            }
        })
    } else {
        console.log("no token")
        res.send("No token")
    }
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    var curPort = process.env.PORT;
    if (curPort === undefined) {
        console.log(`listening on localhost://8080`)
        curPort = "localhost://8080"
    } else {
        let d = new Date();
        console.log(`listening on ${curPort} at ${d}`)
    }
})

app.post('/signUpData', (req, res) => {
    if (req.body.username.length && req.body.password.length) {
        db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
            if (user.length) {
                res.json('This username already exists')
            } else {
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    db.collection('users').save({
                        username: req.body.username,
                        password: hash,
                        staticDots: [],
                        pursuits: [],
                        saccades: [],
                        combination: [],
                        randomSaccades: [],
                        antiSaccades: [],
                        opk: [],
                        dateCreated: req.body.dateCreated
                    }, (err, result) => {
                        if (err) {
                            res.json("Failed")
                            return console.log(err);
                        } else {
                            res.json("Sign Up Successful")
                            console.log('saved to database');
                        }
                    });
                });
            }
        })
    } else {
        res.json('Error: username or password can\'t be blank')
    }
});

app.post('/changePassword', (req, res) => {
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (user.length) {
            bcrypt.compare(req.body.oldPassword, user[0].password, function (err, resolve) {
                if (resolve) {
                    bcrypt.hash(req.body.newPassword1, saltRounds, function (err, hash) {
                        db.collection('users').updateOne(
                            { username: req.body.username },
                            {
                                $set:
                                {
                                    password: hash
                                }
                            }
                        )
                        if (err) {
                            res.json("Failed")
                            console.log(err);
                        } else {
                            res.json('Successfully updated password')
                            console.log(`password updated for ${req.body.username}`);
                        }
                    });
                } else {
                    res.json("Wrong password")
                }
            });
        } else {
            res.json('Error: Please log out and back in')
        }
    })
});

app.post("/userLogIn", (req, res) => {
    db.collection("users").find({ username: req.body.username }).toArray((err, user) => {
        if (!user.length) {
            res.json({
                message: `Login failed!`
            });
        } else if (err) {
            res.json({
                message: "Login failed!"
            });
        } else {
            // Un-hash the password to verify login
            bcrypt.compare(req.body.password, user[0].password, function (err, resolve) {
                if (resolve === true) {
                    // Upon successful login, assigns the user a token
                    var token = jwt.sign(req.body.username, ('Secret'), {
                    });
                    res.json({
                        message: "Login successful!",
                        myToken: token,
                        user: user[0],
                        item: user
                    });
                    console.log(`Sign in successful from ${req.body.username}`)
                } else if (resolve === false) {
                    res.json({
                        message: "Login failed!",
                    })
                }
            });
        }
    })
});

app.post("/saveStaticDotsExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                staticDots: [req.body.centerDotColor, req.body.extraDotColor]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});

app.post("/saveAntiSaccadesExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                antiSaccades: [req.body.centerDotColor, req.body.trueExtraDotColor, req.body.extraDotColor, req.body.dotSpeed, req.body.cycles, req.body.goNoGo, req.body.goNoGoDotColor]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});

app.post("/savePursuitsExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                pursuits: [req.body.direction, req.body.dotColor, req.body.dotSpeed, req.body.cycles]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});

app.post("/saveSaccadesExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                saccades: [req.body.direction, req.body.dotColor, req.body.dotSpeed, req.body.cycles, req.body.steps]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});

app.post("/saveCombinationExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                combination: [req.body.dotColor, req.body.masterArray, req.body.exerciseTypeCheck]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});

app.post("/saveRandomSaccadesExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                randomSaccades: [req.body.centerDotColor, req.body.extraDotColor, req.body.dotSpeed, req.body.dotNumber]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});

app.post("/saveOPKExerciseOptions", verifyToken, (req, res) => {
    db.collection('users').updateOne(
        { username: req.body.username },
        {
            $set:
            {
                opk: [req.body.stripeColor, req.body.backgroundColor, req.body.scrollSpeed]
            }
        }
    )
    db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "Exercise saved successfully",
                user: user[0]
            })
        }
    })
});
