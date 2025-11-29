// login.js
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Get saved user data
    const savedUser = JSON.parse(localStorage.getItem('user'));
    
    // Check if credentials match
    if (savedUser && savedUser.email === email && savedUser.password === password) {
        alert('Login successful! Welcome ' + savedUser.firstName);
        window.location.href = 'homepage.html'; // Redirect to home page
    } else {
        alert('Invalid email or password!');
    }
});