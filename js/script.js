$(document).ready(function () {
    /* ---------------------------- Preloader ---------------------------- */
    $(window).on("load", function () {
        $('.preloader').fadeOut("slow");
    });

    /* ------------------------ Menu Carousel ------------------------- */
    $('.our-menu').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {

                items: 2,
            },
            1000: {

                items: 5,
            }
        }
    });

    /* ------------------------- ScrollIt -------------------------- */
    $(function () {
        $.scrollIt({
            topOffset: -100
        });
    });

    /* ----------------  Animate On Scroll  ---------------- */
    AOS.init();


    /* ------------------ Navbar Shrink ------------------- */
    //   $(window).on("scroll", function () {
    //     if ($(this).scrollTop() > 90) {
    //         $(".navbar").addClass("navbar-shrink");
    //     } else {
    //         $(".navbar").removeClass("navbar-shrink");
    //     }
    // });

    /* -------------  Scroll to Top Button  -------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    });

    $('.topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

});