$(function(){


  // 햄버거바 ; 공통 effect  
  $('header .headeri .side .hide .menu').click(function () {
    $('.mo_menu').fadeIn();
  });

  $('.mo_menu button').click(function () {
    $('.mo_menu').fadeOut()
  });


//s2_section1
$('#sub2_wrap .s2_section1 .teaBox .box .tea').on({
    mouseover:function(){
        $(this).stop(true).animate({opacity:'0.6'},400,'easeInOutQuad')
   
    },
    mouseout:function(){
        $(this).stop(true).animate({opacity:'1'},400,'easeInOutQuad')
   
    }
})



$('#sub2_wrap .s2_section1 .teaBox .box .m').on({
    mouseover:function(){
        $(this).stop(true).animate({scale:'1.2'},400),
        $('figure').css({overflow:'hidden'})
   
    },
    mouseout:function(){
        $(this).stop(true).animate({scale:'1'},400,'easeInOutQuad')
   
    }
})



















// tea파일
$('.s2_section1 .teaBox').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
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
        breakpoint: 480,
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

});