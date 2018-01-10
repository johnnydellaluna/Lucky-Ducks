var path = require("path");

var isAuthenticated = require("../config/authentication");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // app.get("/register", function(req, res) {
  //   if (req.user) {
  //     res.redirect("/public/index.html");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/register.html"));
  // });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the dashboard
    if (req.user) {
      res.redirect("/public/index.html");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};