var db = require("../models");

var passport = require("../config/passport");

module.exports = function(app) {
  // PASSPORT
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/home.html");
  });

  app.post("/api/register", function(req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password     
    }).then(function(data) {
      res.redirect(307, "/api/login");
      // res.json();
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


  // CREATE
  app.post("/api/users", function(req, res) {
    db.User
    .create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // UPDATE
  app.put("/api/users", function(req, res) {
    updatedData = req.body;

    db.User
    .update(
      updatedData,
      {
        where: { id: req.body.id }
      }
    )
    .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // DELETE
  app.delete("/api/user/:id", function(req, res) {
    db.User
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // READ
  // ALL USERS
  app.get("/api/users", function(req, res) {
    db.User
    .findAll({
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // USER BY ID
  app.get("/api/user/:id", function(req, res) {
    db.User
    .findOne({
      where: {
        id: req.params.id
      },
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
};