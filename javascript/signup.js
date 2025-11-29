// signup.js
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create user object
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('second-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Save to browser storage
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    
    alert('Account created successfully!');
    window.location.href = 'homepage.html'; // Redirect to home page
});