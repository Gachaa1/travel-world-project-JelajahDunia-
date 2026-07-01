$(document).ready(function() {
    setTimeout(function() {
        $('#discount-popup').css('display', 'flex').hide().fadeIn(500);
    }, 2000);

    $('#close-popup').click(function() {
        $('#discount-popup').fadeOut(400);
    });

    $('#discount-popup').click(function(e) {
        if ($(e.target).hasClass('popup-overlay')) {
            $(this).fadeOut(400);
        }
    });
});