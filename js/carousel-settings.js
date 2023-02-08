$(document).ready(function(){
    //deals carousel
    var dealsOwl = $('.deals__carousel').owlCarousel({
        loop: false,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 3,
        onInitialize: dealsInit,
        responsive:{
          0:{
            items: 1,
            stagePadding: 50,
          },
          426:{
            items: 1,
            stagePadding: 100,
          },
          768:{
            items: 2,
            stagePadding: 100,
          },
          1380:{
            items: 3,
          },
        }
    });

    function dealsInit(){
      if (window.innerWidth > 1360){
        const lastItem = document.createElement('div');
        document.querySelector('.deals__carousel').appendChild(lastItem);
      }
    }

    $('.deals__left-arrow').click(function() {
      dealsOwl.trigger('prev.owl.carousel');
    })
    $('.deals__right-arrow').click(function() {
      dealsOwl.trigger('next.owl.carousel');
    });


    //reviews carousel
    var reviewsOwl = $('.reviews__carousel').owlCarousel({
      loop: false,
      autoplay: false,
      slideTransition: 'linear',
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      nav: false,
      dots: false,
      items: 3,
      onInitialize: reviewsInit,
        responsive:{
          0:{
            items: 1,
            stagePadding: 50,
          },
          426:{
            items: 1,
            stagePadding: 100,
          },
          768:{
            items: 2,
            stagePadding: 100,
          },
          1380:{
            items: 3,
          },
        }
    });

    function reviewsInit(){
      if (window.innerWidth > 1360){
        const lastItem = document.createElement('div');
        document.querySelector('.reviews__carousel').appendChild(lastItem);
      }
    }

    $('.reviews__left-arrow').click(function() {
      reviewsOwl.trigger('prev.owl.carousel');
    })
    $('.reviews__right-arrow').click(function() {
      reviewsOwl.trigger('next.owl.carousel');
    })
});