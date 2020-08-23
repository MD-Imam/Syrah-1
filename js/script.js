// fixed/sticky menu

$(window).scroll(function(){
    var scrollamount = $(window).scrollTop()
    
    if(scrollamount > 700){
      $(".menu").addClass("fixed")
    }else{
      $(".menu").removeClass("fixed")
    }
  
      
  
  
  
    if(scrollamount > 500){
      $(".btop").fadeIn();
    }else{
      $(".btop").fadeOut();
    }
  })
  
  
  $(".btop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },3000)
  })


//   slick-slider


$('.lightest').slick({
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed:1000,
    // autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



