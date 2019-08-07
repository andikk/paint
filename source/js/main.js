console.log("1234");
svg4everybody();

var navMain = document.querySelector('.menu');
var navToggle = document.querySelector('.menu__button');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('js-menu_closed')) {
    navMain.classList.remove('js-menu_closed');
    navMain.classList.add('js-menu_opened');
  } else {
    navMain.classList.add('js-menu_closed');
    navMain.classList.remove('js-menu_opened');
  }
});

var mySwiper = new Swiper ('.swiper-container', {

  direction: 'horizontal',
  slidesPerView: 2.3,
  loop: true,
  spaceBetween: 30,
    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   breakpoints: {
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        }
    }

  })