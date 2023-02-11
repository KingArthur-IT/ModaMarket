$(document).ready(function(){
    //popular carousel
    var popularCarousel = $('.popular-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 5,
        // responsive:{
        //   0:{
        //     items: 1,
        //     stagePadding: 50,
        //   },
        //   426:{
        //     items: 1,
        //     stagePadding: 100,
        //   },
        //   768:{
        //     items: 2,
        //     stagePadding: 100,
        //   },
        //   1380:{
        //     items: 3,
        //   },
        // }
    });

    $('.slider__arrow.arrow-left').click(function() {
        popularCarousel.trigger('prev.owl.carousel');
    })
    $('.slider__arrow.arrow-right').click(function() {
        popularCarousel.trigger('next.owl.carousel');
    });

    //baner carousel
    var banerCarousel = $('.baner-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        // slideTransition: 'linear',
        // autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: true,
        items: 1
    });

    $('.baner__arrow.arrow-left').click(function() {
        banerCarousel.trigger('prev.owl.carousel');
    })
    $('.baner__arrow.arrow-right').click(function() {
        banerCarousel.trigger('next.owl.carousel');
    });

    //catg carousel
    $('.catg-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        nav: false,
        dots: false,
        items: 10
    });
});