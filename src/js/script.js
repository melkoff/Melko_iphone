// burger menu
'use strict';
const humb = document.querySelector('.burger');
const humbBody = document.querySelector('.burger__menu');
const header = document.querySelector('.header');
const menuOpen = document.querySelector('html');
const humbLink = document.querySelector('.burger__menu');

humb.addEventListener('click', humbHandler);

function humbHandler(burgerOn) {
  burgerOn.preventDefault();
  humbBody.classList.toggle("open");
  header.classList.toggle('active');
  menuOpen.classList.toggle("menu__open");
  humb.classList.toggle('active');
  humbLink.classList.toggle('active');
}
$('.burger__menu a').on('click', function () {
  $('.burger__menu').toggleClass('open');
  $('.burger').toggleClass('active');
  $('html').toggleClass('menu__active');
})
// ============================================= //


//Music effect
var beepOne = $("#beep")[0];
$(".title__event_card")
  .mouseenter(function () {
    beepOne.play();
  });
// ============================================= //


//Scroll indicator
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// ============================================= //