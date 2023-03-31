// Define an array to store the user data
var users = [];

// Define the signup function
function signup() {
	// Get the input values from the form
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	// Validate the input values
	if (name == "" || email == "" || password == "") {
		alert("Please fill in all fields");
		return;
	}

	// Check if the user already exists
	for (var i = 0; i < users.length; i++) {
		if (users[i].email == email) {
			alert("This email address is already registered");
			return;
		}
	}

	// Add the user data to the array
	users.push({name: name, email: email, password: password});

	// Redirect the user to the login page
	window.location.href = "login.html";
}
