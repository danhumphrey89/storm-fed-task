$(document).ready(function() {

    $('.signup_button').on('click', function() { //open modal on button click
         $('.modal_window').fadeIn("slow");
    });

    $('.modal_window .close').on('click', function() { //close modal on x click
        $('.modal_window').fadeOut("slow");
    });

});


