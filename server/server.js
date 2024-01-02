const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();
const SERVER_PORT = process.env.PORT_ORIGIN || 54321;
const DB_URI = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/********************";





const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





// ***************************************************//
// *****  CROSS ORIGIN RESOURCE SHARING RELATED  *****//
// ***************************************************//
app.use(cors());
// SET DEFAULT: EXPRESS BACKEND URL
// var corsOptions = {
//     origin: 'http://127.0.0.1:5000',
// }
//
// This is CORS-enabled for all origins!
// app.use(cors(corsOptions));     // OR app.use(cors()), w/out defining corsOptions
//
//
// This is CORS-enabled for a Single Route!
// app.get("/products/:id", cors(), function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for a Single Route!' });
// });
//
//
// This is CORS-enabled for only 'http://127.0.0.1:5000'
// app.get("/products/:id", cors(corsOptions), function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for a Single Route!' });
// });
// ***************************************************//
// ***************************************************//





////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  MongoDB  ==>  DATABASE_CONNNECTION
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// mongoose.set("strictQuery", false);
// const db = require("./models");
// db.mongoose.connect(db.url)
// .then(() => {
//     console.log(`DATABASE CONNECTION: ${db.url}`);
// })
// .catch((err) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
// });

mongoose.set("strictQuery", false);
mongoose.connect(DB_URI)
.then(() => {
    console.log(`DATABASE CONNECTION: ${DB_URI}`);
})
.catch((err) => {
    console.log("************ ERROR 1 ************")
    console.log("Cannot connect to the database!", err);
    console.log("************ ERROR 2 ************")
    console.log(`Cannot connect to the database: ${err}`);
    process.exit();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////





// ***************************************************//
// *************  Express: HOME ADDRESS  *************//
// ***************************************************//
app.get('/', (req, res) => {
    res.send("My Backend App | Gabby");
});





////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  USER ROUTE  ---for-->  USER CONTROLLER
////////////////////////////////////////////////////////////////////////////////////////////////////////////
require("./routes/user.routes")(app);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  [BACKEND] Express Server  ===>  PORT
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(SERVER_PORT, () => {
    console.log(`SERVER IS RUNNING ON: http://localhost:${SERVER_PORT}`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
