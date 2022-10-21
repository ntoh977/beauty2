// function to detect if an element is scrolled into view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// listen for scroll event
$(window).scroll(function () {
  // check if element is scrolled into view
  if (isScrolledIntoView($('.blog-title,.container-title, .container-text, .blog-title,.text-footer'))) {
    // element is scrolled into view, add animation class
    $('.blog-title,.container-title, .container-text, .blog-title,.text-footer').addClass('animation');
  }
});

$(window).scroll(function () {
    // check if element is scrolled into view
    if (isScrolledIntoView($('.text-two-menu,.three-img,.blog-block'))) {
      // element is scrolled into view, add animation class
      $('.text-two-menu,.three-img,.blog-block').addClass('animation2');
    }
  });
  
  $(window).scroll(function () {
    // check if element is scrolled into view
    if (isScrolledIntoView($('.logo'))) {
      // element is scrolled into view, add animation class
      $('.logo').addClass('animation3');
    }
  });
  $(window).scroll(function () {
    // check if element is scrolled into view
    if (isScrolledIntoView($('.menu'))) {
      // element is scrolled into view, add animation class
      $('.menu').addClass('animation4');
    }
  });
  $(window).scroll(function () {
    // check if element is scrolled into view
    if (isScrolledIntoView($('.top-container-right,.top-container-left'))) {
      // element is scrolled into view, add animation class
      $('.top-container-right,.top-container-left').addClass('animation5');
    }
  });
  $(window).scroll(function () {
    // check if element is scrolled into view
    if (isScrolledIntoView($('.top-container3-left,.top-container2-left'))) {
      // element is scrolled into view, add animation class
      $('.top-container3-left,.top-container2-left').addClass('animation6');
    }
  });

  $(window).scroll(function () {
    // check if element is scrolled into view
    if (isScrolledIntoView($('.top-container3-right, .top-container2-right'))) {
      // element is scrolled into view, add animation class
      $('.top-container3-right, .top-container2-right').addClass('animation7');
    }
  });

// $(document).ready(function () {

//     // $(".slick-next").click(function(e){
//     //     // e.preventDefault();
//     //     $(".slick-next").not($(this)).removeClass("active_slick");
//     //     $(this).toggleClass("active_slick");
//     //   });

//     $('.slider__top').slick({
//         slidesToShow: 4,
//         arrows: true,
//         dots: false,
//     prevArrow: false,
//     nextArrow: false,
//     // centerMode:true,
//         // prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector__l.png' ></div>",
//         // nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector__r.png' class='rotate'></div>",
//         responsive: [
//             {
//                 breakpoint: 1032,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 836,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 580,
//                 settings: {
//                     centerMode:true,
//                     slidesToShow: 1,
//                 }
//             }
//         ],
//     });
//     $('.post__slide').slick({
//         slidesToShow: 3,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 836,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 580,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ],
//         prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector__l.png' ></div>",
//         nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector__r.png' class='rotate'></div>",
//     });

//     // $('.slider__one').slick({
//     //     cssEase: 'linear',
//     //     arrows: true,
//     //     autoplay: true,
//     //     autoplaySpeed: 2000,
//     //     prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector_4.png'></div>",
//     //     nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector_4.png' class='rotate'></div>",
//     // });
// });

$(document).ready(function () {
    $("#top").hide();
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1300) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });

        $('#top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });  
});


// $("ul.menu--catigory").on('click', 'li', function(){
//     $(this).siblings().removeClass('active');
//     $(this).addClass('active');
//   });

