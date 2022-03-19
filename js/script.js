//TIMEOUT PARA CUANDO LA PAGINA WEB VA A CARGAR,
//UNA VEZ PASADOS 2 SEGUNDOS DESAPARECE EL LOADER
$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    $("#loader").css("z-index", "-9999");
  }, 2000);
});

// TOGGLE SWITCH DEL HEADER (PARA CAMBIAR EL TEMA)
var toggle = false;
var video = $("#bg-video");

$("#chk").on("click", function () {
  $(":root").toggleClass("light-theme").fadeIn("slow");
  toggle = !toggle;
  if (toggle) {
    video.css("filter", "invert()");
  } else {
    video.css("filter", "");
  }
});

//theme switch en movil
$("#chk-mob").on("click", function () {
  $("#theme-switcher").toggleClass("display_none");
});

// CAMBIO DE COLOR DEL HEADER AL HACER SCROLL
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 75) {
    $(".header").addClass("active");
    $(".menu_desk > a").addClass("white-text");
    $(".menu_desk > a").css("font-weight", "bold");
    $(".menu_desk > a").css("letter-spacing", "0.2vw");
  } else {
    $(".header").removeClass("active");
    $(".menu_desk > a").removeClass("white-text");
    $(".menu_desk > a").css("font-weight", "initial");
    $(".menu_desk > a").css("letter-spacing", "initial");
  }

  if ($(window).scrollTop() > 473) {
    $("#arrowdown").stop().fadeOut("slow");
  } else {
    $("#arrowdown").stop().fadeIn("slow");
  }
});

//SNAP SCROLL (CUANDO HACEMOS SCROLL VA DIRECTAMENTE A LA SECCION)
$(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  } else {
    $("section, .portfolio_img, footer").SnapScroll();
  }
});

//SMOOTH SCROLLING AL HACER CLICK EN HEADER
//src https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        100,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
