$(function(){

"use strict";


/*------------------------------------------------
  Mobile nav js
  ------------------------------------------------ */

  $( ".aside-trigger" ).click(function() {
  	$(".mobile-aside").toggleClass("active");
  });
  
  /*------------------------------------------------
  Darkmode js
  ------------------------------------------------ */

  $( "#darkmode-toggler" ).click(function() {
  	$("body").toggleClass("darkmode-active");
  });


/*------------------------------------------------
  Event Slider
  ------------------------------------------------ */

  $(".event-slider").slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 0
  });













});

