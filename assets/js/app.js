$(document).ready(function() {
  $(".vk-button").hover(
    function() {
      $(".logo").animate({
        backgroundImage: "../img/logo-hover.png"
      }, 200);
  }, function() {
      $(".logo").animate({
        backgroundImage: "../img/logo.png"
      }, 200)
  });

  $('.slideshow').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    fade: true,
    cssEase: 'ease-in-out',
    accessibility: false,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    zIndex: 1
  });


  var audio = document.getElementsByTagName('audio')[0];
  audio.volume = 0.25;
  audio.play();

  function preloadImages(array) {
      if (!preloadImages.list) {
          preloadImages.list = [];
      }
      var list = preloadImages.list;
      for (var i = 0; i < array.length; i++) {
          var img = new Image();
          img.onload = function() {
              var index = list.indexOf(this);
              if (index !== -1) {
                  list.splice(index, 1);
              }
          }
          list.push(img);
          img.src = array[i];
      }
  }

  preloadImages(["assets/img/bg1.jpg", "assets/img/bg2.jpg", "assets/img/bg3.jpg", "assets/img/bg4.jpg", "assets/img/logo.png", "assets/img/logo-hover.png", "assets/img/vk-button.png", "assets/img/vk-button-hover.png"]);

});


$(window).on('load', function() {
  $('.loader-text').delay(350).fadeOut('slow');
});