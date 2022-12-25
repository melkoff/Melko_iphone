// const htmlmin = require("gulp-htmlmin");

// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });

//burger menu
'use strict';
const humb = document.querySelector('#burger');
const humbBody = document.querySelector('#burger-menu');
const header = document.querySelector('.header');
const menuOpen = document.querySelector('html');


humb.addEventListener('click', humbHandler);

function humbHandler(e) {
  e.preventDefault();
  humbBody.classList.toggle("open");
  menuOpen.classList.toggle("menu__open");
  humb.classList.toggle('active');
  header.classList.toggle('active');
  window.scrollTo(0, 0);
}
// let slider = $(document).ready(function () {
//   $('.teacher').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       {
//         breakpoint: 1145,
//         settings: {
//           slidesToShow: 2,
//         }
//       },{
//         breakpoint: 901,
//         settings: {
//           slidesToShow: 1,
//         }
//       }

//     ]
//   });
// });

// $(document).ready(function () {
//   $(".feedbacks__slider").slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: false,
//     infinite: true,
//     prevArrow:
//       "<img class='a-left control-c prev slick-prev' src='../img/Vector-left.svg'>",
//     nextArrow:
//       "<img class='a-right control-c next slick-next' src='../img/Vector-right.svg'>",
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           vertical: true,
//           verticalSwiping: true,
//           prevArrow:
//           "<img class='a-left control-b prev slick-prev' src='../img/Vector-left.svg'>",
//         nextArrow:
//           "<img class='a-right control-b next slick-next' src='../img/Vector-down.svg'>",
//         },
//       },
//     ],
//   });
// });