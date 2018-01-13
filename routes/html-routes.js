var path = require("path");

var isAuthenticated = require("../config/authentication");

// Routes
// =============================================================
module.exports = function(app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // app.get("/register", function(req, res) {
  //   if (req.user) {
  //     res.redirect("/public/index.html");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/register.html"));
  // });

  app.get("/", function(req, res) {
    if (req.user) {
      console.log("logged in user", req.user)
      res.redirect("/home.html");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};