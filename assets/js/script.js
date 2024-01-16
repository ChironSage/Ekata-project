// 'use strict';



// /**
//  * navbar toggle
//  */

// const navbar = document.querySelector("[data-navbar]");
// const navToggler = document.querySelectorAll("[data-nav-toggler]");
// const navLinks = document.querySelectorAll("[data-nav-link]");
// const overlay = document.querySelector("[data-overlay]");

// for (let i = 0; i < navToggler.length; i++) {
//   navToggler[i].addEventListener("click", function () {
//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//   });
// }

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//     navbar.classList.remove("active");
//     overlay.classList.remove("active");
//   });
// }



// /**
//  * header
//  */
// // document.getElementById('navbar-placeholder').innerHTML = '<object type="text/html" data="navbar.html" ></object>';

// const header = document.querySelector("[data-header]");
// const dropdown_name = document.querySelectorAll(".dropdown-name")
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 100) {
//     header.classList.add("active");
//     dropdown_name.forEach(function(dropdown_name) {
//       dropdown_name.classList.add('overlayed');
//     });
//     backTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     dropdown_name.forEach(function(dropdown_name) {
//       dropdown_name.classList.remove('overlayed');
//     });
//     backTopBtn.classList.remove("active");
//   }
// });


var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.scrollY >0) {
    nav.classList.add('scroll-color');
    nav.classList.add('fontcolor')
  }
  else
    nav.classList.remove('scroll-color');

})