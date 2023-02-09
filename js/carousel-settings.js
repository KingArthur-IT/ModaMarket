$(document).ready(function(){
    //deals carousel
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

    // $('.deals__left-arrow').click(function() {
    //   dealsOwl.trigger('prev.owl.carousel');
    // })
    // $('.deals__right-arrow').click(function() {
    //   dealsOwl.trigger('next.owl.carousel');
    // });
});