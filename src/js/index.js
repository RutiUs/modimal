// // Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	spaceBetween: 16,

	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},

	breakpoints: {
        780: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      },
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Аккардеон для мобильной навигации

import accordion from './modules/accordion.js';
accordion();