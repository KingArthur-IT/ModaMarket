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
        responsive:{
          0: {
            items: 2,
          },
          425: {
            items: 3,
          },
          600: {
            items: 4,
          },
          768: {
            items: 5,
          },
        }
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
        autoplaySpeed: 2500,
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
        items: 10,
        responsive: {
          0:{
            items: 4,
          },
          425:{
            items: 4,
          },
          600: {
            items: 5,
          },
          768: {
            items: 7,
          },
          1024: {
            items: 10,
          },
        }
    });
});

document.querySelectorAll('.slider__favourite').forEach(fav => {
  fav.addEventListener('click', (e) => {
    e.preventDefault()
    fav.classList.toggle('active')
  })
});

document.querySelectorAll('.catalog__favourite').forEach(fav => {
  fav.addEventListener('click', (e) => {
    e.preventDefault()
    fav.classList.toggle('active')
  })
})