var loginBox = document.getElementById('login-box');
var registerBox = document.getElementById('register-box');
var toRegister = document.getElementById('to-register');
var toLogin = document.getElementById('to-login');

toRegister.onclick = function (e) {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
};

toLogin.onclick = function (e) {
    e.preventDefault();
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
};

var registerForm = document.getElementById('register-form');
registerForm.onsubmit = function (e) {
    e.preventDefault();

    var username = document.getElementById('reg-username').value;
    var email = document.getElementById('reg-email').value;
    var password = document.getElementById('reg-password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var emailSudahAda = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            emailSudahAda = true;
            break;
        }
    }

    if (emailSudahAda) {
        alert('Email ini sudah terdaftar! Gunakan email lain.');
        return;
    }

    users.push({ username: username, email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Pendaftaran Berhasil! Silakan login.');
    registerForm.reset();

    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
};

var loginForm = document.getElementById('login-form');
loginForm.onsubmit = function (e) {
    e.preventDefault();

    var emailInput = document.getElementById('login-email').value;
    var passwordInput = document.getElementById('login-password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userDitemukan = null;

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === emailInput && users[i].password === passwordInput) {
            userDitemukan = users[i];
            break;
        }
    }

    if (userDitemukan) {
        alert('Selamat datang kembali, ' + userDitemukan.username + '!');
        localStorage.setItem('sessionUser', JSON.stringify(userDitemukan));
        window.location.href = 'Home.html';
    } else {
        alert('Email atau Kata Sandi salah. Coba periksa kembali.');
    }
};