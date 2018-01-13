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

    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data, err) {
            // if (err) {
            //     alert("Please enter a valid email and password or register!")
            // }
            window.location.replace(data);
        })
    }








});