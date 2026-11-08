// Toggle Panel Logic (if not already implemented)
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

if (registerBtn && loginBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
}

// LOGIN VALIDATION
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop page refresh

    const usernameInput = document.getElementById('loginUsername').value.trim();
    const passwordInput = document.getElementById('loginPassword').value.trim();

    // Check if user exists in localStorage or match a default test account
    const savedUser = JSON.parse(localStorage.getItem('glowUpUser'));

    // Option A: Check against registered user from localStorage
    if (savedUser && savedUser.username === usernameInput && savedUser.password === passwordInput) {
        alert('Welcome back, ' + usernameInput + '! ✨');
        window.location.href = 'acceuil.html'; // Go to homepage
    } 
    // Option B: Allow a demo test user (Username: admin, Password: 123)
    else if (usernameInput === 'admin' && passwordInput === '123') {
        alert('Welcome back, Admin! ✨');
        window.location.href = 'acceuil.html';
    } 
    else {
        alert('❌ Incorrect username or password! Please try again.');
    }
});

// REGISTRATION LOGIC
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop page refresh

    const regUsername = document.getElementById('regUsername').value.trim();
    const regEmail = document.getElementById('regEmail').value.trim();
    const regPassword = document.getElementById('regPassword').value.trim();
    const regConfirmPassword = document.getElementById('regConfirmPassword').value.trim();

    // Password match check
    if (regPassword !== regConfirmPassword) {
        alert('❌ Passwords do not match!');
        return;
    }

    // Password strength check (at least 6 characters)
    if (regPassword.length < 6) {
        alert('❌ Password must be at least 6 characters long!');
        return;
    }

    // Save user info to localStorage
    const newUser = {
        username: regUsername,
        email: regEmail,
        password: regPassword
    };

    localStorage.setItem('glowUpUser', JSON.stringify(newUser));

    alert('🎉 Account created successfully! Please login now. ✨');
    
    // Switch back to login panel
    container.classList.remove('active');
    registerForm.reset();
});