// Switch between forms
document.getElementById('switch-to-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'flex';
});

document.getElementById('switch-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'flex';
});

// Disable/Enable sign-up button based on form completion
const signupBtn = document.getElementById('signup-btn');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const registerPasswordField = document.getElementById('register-password');

function checkFormCompletion() {
    if (nameField.value && emailField.value && registerPasswordField.value) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
}

nameField.addEventListener('input', checkFormCompletion);
emailField.addEventListener('input', checkFormCompletion);
registerPasswordField.addEventListener('input', checkFormCompletion);

// Switch back to login form after successful sign up
signupBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents form submission (if needed)

    // Reset form fields
    nameField.value = '';
    emailField.value = '';
    registerPasswordField.value = '';
    signupBtn.disabled = true; // Re-disable button after reset

    // Switch back to login form
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'flex';

    // Login Button Click Event
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();

    // Get entered username and password
    const enteredUsername = document.getElementById('username').value; // Change to 'username'
    const enteredPassword = document.getElementById('password').value; // Change to 'password'

    // Get stored username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored credentials
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Redirect to home page if login is successful
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});

});
