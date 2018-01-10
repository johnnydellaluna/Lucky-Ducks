var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:3000/")
  .type("input#exampleInputName", "jimmyneutron")
  .type("input#exampleInputEmail1", "jimmy@thelab.com")
  .type("input#exampleInputPassword1", "goddard")
  .click("#register-button")
  .goto("http://localhost:3000/home")
  .evaluate(function() {
    return document.querySelector(".container text-center");
  })
  .end()
  .catch(function(error) {
    console.error("Unable to register", error);
  });