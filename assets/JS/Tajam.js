$(function() {

    let header = document.querySelector('#header');
    let introH = document.querySelector('.intro').clientHeight;

    /* FIXED MENU */

    window.addEventListener('scroll', function() {
           fixing()
    });

    document.addEventListener('DOMContentLoaded', function() {
           fixing()
    });

    function fixing() {
        let scrollPos = window.pageYOffset;
//        let fixed = document.querySelector('fixed');

        if (scrollPos >= introH) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    };

    /* ACTIVE LINKS */ /* SMOOTH SCROLL */

let anchors = document.querySelectorAll('.nav_link');

  anchors.forEach(function(item) {

      let currentBtn = item;

      item.addEventListener('click', function() {

              let BlockId = $(this).data('scroll');
              let BlockOffset = $(BlockId).offset().top;

             $("html, body").animate({
                 scrollTop: BlockOffset
             }, 500);

               anchors.forEach(function(item) {
             item.classList.remove('active');
             });

             currentBtn.classList.add('active');

      });
  });

document.querySelector('.nav_link').click();


    $('[data-slider]').slick({
        arrows: false,
        dots: true,
    });


    /* ACTIVE DOT */

    let dots = document.querySelectorAll('.slick-dots li button');

    dots.forEach(function(dot) {

       dot.classList.add('active');

    });

document.querySelector('.slick-dots li button').click();


    /* BURGER MENU */

    let burger = document.querySelector('.burger_menu');
    let nav = document.querySelector('.nav');

    $('#burger').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.nav').toggleClass('active');

    });

       $('.nav_link').on('click', function() {
          $(nav).removeClass('active');
        burger.classList.remove('active');
       });








});
