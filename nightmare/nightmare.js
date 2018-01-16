var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:3000/")
  .type("input#registerUsername", "jimmyneutron")
  .type("input#registerEmail", "jimmy@thelab.com")
  .type("input#registerPassword", "goddard")
  .click("#register-button")
  .goto("http://localhost:3000/home.html")
  .evaluate(function() {
    return document.querySelector(".container text-center");
  })
  .end()
  .catch(function(error) {
    console.error("Unable to register", error);
  });