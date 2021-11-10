$(function(){
   $('.top-slider').slick({
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/section/section-prev.svg" alt="prev arrow"></button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/section/section-next.svg" alt="next arrow"></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {

            }
         },
         {
            breakpoint: 640,
            settings: {
               arrows: false
            }
         }
      ]
   });
   $('.message__inner').slick({
      dots: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
   });
})
