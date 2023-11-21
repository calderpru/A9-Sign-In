const signInButton = document.getElementById('signIn-form-submit');
const signInErrorMsg = document.getElementById('signIn-form-error');

signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signInForm.email.value;
    const password = signInForm.password.value;

    // chance password and username to value that access database
    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        window.location.href = 'main.html'; // Redirects to main.html
    } else {
        alert("Incorrect username or password, try again.");
    }
});
