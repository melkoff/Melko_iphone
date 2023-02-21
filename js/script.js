// burger menu
'use strict';
const humb = document.querySelector('.burger');
const humbBody = document.querySelector('.burger__menu');
const header = document.querySelector('.header');
const menuOpen = document.querySelector('html');


humb.addEventListener('click', humbHandler);

function humbHandler(e) {
  e.preventDefault();
  humbBody.classList.toggle("open");
  menuOpen.classList.toggle("menu__open");
  humb.classList.toggle('active');
  header.classList.toggle('active');
  // window.scrollTo(0, 0);
}


//Music effect
var beepOne = $("#beep")[0];
$(".title__event_card")
  .mouseenter(function () {
    beepOne.play();
  });


//Scroll indicator
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}