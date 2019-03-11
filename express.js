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

// const url = `mongodb://localhost:27017`
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds111441.mlab.com:11441/eye-tracker`
const dbName = 'eye-tracker';
const client = new MongoClient(url, { useNewUrlParser: true });

var db;

client.connect(function (err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    db = client.db(dbName);

    // client.close();
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

// Only has the server listening if it can successfully connect to the database
// MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds111441.mlab.com:11441/eye-tracker`, (err, client) => {
//     if (err) return console.log(err)
//     db = client.db("eye-tracker") // whatever your database name is
//     app.listen(process.env.PORT || 8080, () => {
//         console.log("listening on 8080")
//     })
// })

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
