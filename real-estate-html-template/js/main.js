(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    var wrapper = document.getElementById("wrapper");
    var registerLink = document.getElementById("register-link");
    var loginLink = document.getElementById("login-link");
    var btnLoginPopup = document.getElementById("btnPopup");
    var iconClose = document.getElementById("icon-close");

    
  
    registerLink.addEventListener('click', ()=>{
        wrapper.classList.add('active');
    });
    
    loginLink.addEventListener('click', ()=>{
        wrapper.classList.remove('active');
    }); 

    btnLoginPopup.addEventListener('click', ()=>{
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', ()=>{
        wrapper.classList.remove('active-popup');
    });




    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    
    
})(jQuery);

    