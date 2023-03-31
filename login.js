function login() {
    // get user input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // check if email and password are correct (this is just a dummy check)
    if (email === "example@email.com" && password === "password") {
        // redirect to home page with user name parameter in URL
        const name = document.getElementById("name").value;
        window.location.href = `home.html?name=${name}`;
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
