$(function(){
    var mixer = mixitup('.products__inner-box');
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });
    $('.product-slider__inner').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [
            {
                breakpoint: 1948,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,                      
                }
              },
            {
              breakpoint: 1476,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,                                          
              }
            },
            {
                breakpoint: 1004,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,                                                                
                }
              },
              {
                breakpoint: 496,
                settings: {
                    centerPadding: '100px',                                                              
                }
              },   
        ]        
    });
});
$('.product-one__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();    
});

$('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
});

