const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


const app = express();
app.use(express.json());
// Passport Config
require('./config/passport')(passport);


const port = 5050;
const indexpage = require("./route/indexpage")
const users = require("./route/user")
const ItemtyA = require("./route/itemMa")
const Vacancies = require("./route/VanDataA")

//EJS 
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Bodyparser
app.use(express.urlencoded({extended: false}));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());


// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });




//Routes 
app.use('/', indexpage);
app.use('/users', users);
app.use('/item', ItemtyA);
app.use('/newVacancies', Vacancies);

//mongoose
mongoose
.connect("mongodb://localhost/BatikShop",{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));


app.listen(port , function(){
    console.log("Listening in port : " +port);
    });