window.onload = function () {
    var sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
    var authArea = document.getElementById('auth-area');

    if (authArea) {
        if (sessionUser) {
            authArea.innerHTML =
                '<span style="font-size: 0.85rem; font-weight: 600; margin-right: 5px;">👋 ' + sessionUser.username + '</span>' +
                '<button id="logout-btn" class="btn-premium" style="background: #ef4444; padding: 8px 16px; font-size: 0.8rem;">Logout</button>';

            document.getElementById('logout-btn').onclick = function () {
                localStorage.removeItem('sessionUser');
                alert('Anda telah keluar.');
                window.location.reload();
            };
        } else {
            authArea.innerHTML = '<a href="auth.html" class="btn-outline">Login</a>';
        }
    }

    // Fitur Back to Top Melayang
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#btn-top').fadeIn(300);
        } else {
            $('#btn-top').fadeOut(300);
        }
    });

    $('#btn-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
};