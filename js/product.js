$(document).ready(function(){
    var productCarousel = $(".product-carousel").owlCarousel({
      items: 1,
      loop: true
    });

    $('.product__arrow.arrow-left').click(function() {
        productCarousel.trigger('prev.owl.carousel');
    })
    $('.product__arrow.arrow-right').click(function() {
        productCarousel.trigger('next.owl.carousel');
    });
}); 
  
  
// the following to the end is whats needed for the thumbnails.
jQuery( document ).ready(function() {
    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;

    jQuery('.product-carousel .owl-dot').each(function() {
        jQuery( this ).addClass( 'dotnumber' + dotcount);
        jQuery( this ).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });
    
    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;

    jQuery('.product-carousel .owl-item').not('.cloned').each(function() {
        jQuery( this ).addClass( 'slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });
        
    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    jQuery('.product-carousel .owl-dot').each(function() {
        grab = jQuery(this).data('info');

        slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');

        jQuery(this).css("background-image", "url("+slidegrab+")");  

    });
    
    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT 
    amount = jQuery('.product-carousel .owl-dot').length;
    gotowidth = 100/amount;
    
    jQuery('.product-carousel .owl-dot').css("width", gotowidth+"%");
    newwidth = jQuery('.product-carousel .owl-dot').width();
    jQuery('.product-carousel .owl-dot').css("height", newwidth+"px");
});

document.querySelector('.product__favourite-btn').addEventListener('click', (el) => {
    document.querySelector('.product__favourite-btn').classList.toggle('active')
})