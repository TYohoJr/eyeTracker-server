# Eye Tracker Server
Eye Tracker is a personal project to bring exercises that neurologists typically use with patients that have an abnormal vestibular system, to a web based application. This is the back-end code. The front-end can be found at [Eye Tracker](https://github.com/TYohoJr/eyeTracker).

## Server Calls
* `"/"` - Initial loading of the webpage
* `"/signUpData"` - Sign up user with account information stored in a MongoDB database
* `"/changePassword"` - Changes users password in the database
* `"/userLogIn"` - Verifies the users encrypted password, and returns their account information as well as a jsonwebtoken to be stored locally
* `"/save***Exercise"` - Individual functions to store the users prefferred settings for each individual exercise

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes. See deployment for notes on how to deploy the project on a live system.

### Installing
To run the app locally first fork this respository and clone it onto your machine. Instructions on how to do that can be found [here](https://help.github.com/en/articles/fork-a-repo).

Once in the project install the necessary dependencies by running

```
npm install
```
You now have all the files needed to run the project locally.

## Deployment
To deploy the project locally after installing dependencies run

```
nodemon
```

A browser window will automatically open and the project will be running locally. The server will automatically restart and refresh the webpage upon file changes.

## Built With
* [Express](https://expressjs.com/) - Back-end Framework for JS/Node
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Hashing for for stored passwords
* [Body-parser](https://www.npmjs.com/package/body-parser) - Middleware to parse info into the correct format
* [Dotenv](https://www.npmjs.com/package/dotenv) - Safe loading of environment variables
* [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Token for authorizing access between client machine and server
* [MongoDB](https://www.mongodb.com/) - NoSQL database for storing user information (managed throuh mLab)

## Source Control
GitHub was used for source control. You can view commits [here](https://github.com/TYohoJr/eyeTracker-server/commits/master).

## Authors
* Thomas Yoho

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/TYohoJr/eyeTracker-server/blob/master/LICENSE) file for details
