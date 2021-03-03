const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.header__drop-menu').toggleClass('active-menu');
        $('.hamburger').toggleClass('is-active');
    })
 });