$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        280: {

            items: 1
        },
        320: {

            items: 1
        },
        360: {

            items: 1
        },
        361: {

            items: 1
        },
        576: {
            items: 2,
            margin: 48
        },
        767: {
            items: 3
        },
        991: {
            items: 3,
            margin: 30
        },
        1140: {
            items: 4
        },
        1200: {
            items: 5
        },
        1368: {
            items: 5
        }

    }
})