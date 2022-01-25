var classes = ["bg1", "bg2", "bg3", "bg4"];
var randomnumber = Math.floor(Math.random() * classes.length);

$(".front-page").addClass(classes[randomnumber]);

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 120) {
    $(".navigation-page").addClass("fixed-nav");
  } else {
    $(".navigation-page").removeClass("fixed-nav");
  }
  if (scroll >= 350) {
    $(".navigation-page").addClass("show-bar");
} else {
    $(".navigation-page").removeClass("show-bar");
}
});

$(document).ready(function() {
  $(".trending-slide").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
