/* Script for Tooltip */
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

/* Script for Carousel */
$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($(this).children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $(this).children('span').removeClass('fa-pause');
            $(this).children('span').addClass('fa-play');
        }
        else if ($(this).children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $(this).children('span').removeClass('fa-play');
            $(this).children('span').addClass('fa-pause');
        }
    });
});

/* Script for Modals */
$(document).ready(function() {
    $('#loginButton').click(function() {
        $('#loginModal').modal('toggle')
    });
    $('#contactButton').click(function() {
        $('#contactModal').modal('toggle')
    });
});
