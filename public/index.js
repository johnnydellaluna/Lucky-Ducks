$(document).ready(function() {
	var loginForm = $("#loginForm");
	var loginEmail = $("input#loginEmail");
	var loginPassword = $("input#loginPassword");
	var registerForm =  $("#registerForm");
	var registerUsername = $("input#registerUsername");
	var registerEmail = $("input#registerEmail");
	var registerPassword = $("input#registerPassword");

	registerForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            username: registerUsername.val().trim(),
            email: registerEmail.val().trim(),
            password: registerPassword.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        registerUser(userData.username, userData.email, userData.password, userData.budget);
        registerUsername.val("");
        registerEmail.val("");
        registerPassword.val("");

    });

    function registerUser(username, email, password) {
        $.post("/api/register", {
            username: username,
            email: email,
            password: password,
        }).then(function(data) {
            window.location.replace(data);
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    };

    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: loginEmail.val().trim(),
            password: loginPassword.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        loginEmail.val("");
        loginPassword.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function(err) {
            alert("Please enter a valid username and password.")
        });
    }








});