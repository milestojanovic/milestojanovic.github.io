var classes = ["bg1", "bg2", "bg3", "bg4"];
var randomnumber = Math.floor(Math.random() * classes.length);

$(".front-page").addClass(classes[randomnumber]);

$(document).ready(function() {
  $(".trending-slide").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
