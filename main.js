'use strict';
//////////////////////////////////////////////
// Homepage Hero slider functionality

class TopSlide {
  constructor() {
    const slides = document.querySelectorAll('.hero-img-slide');
    let current = 0;
    const maxSlide = slides.length - 1;
    this.changeImg(slides, current, maxSlide);
  }

  changeImg(slides, current, maxSlide) {
    setInterval(function () {
      current = current === maxSlide ? 0 : current + 1;
      slides.forEach(slide => (slide.style.opacity = '0'));
      slides[current].style.opacity = '1';
    }, 5000);
  }
}

const topSlide = new TopSlide();

/////////////////////////////////////////////
// Testimonial Slider Functionality
class TestimonialSlider {
  constructor() {
    // Variables
    const slides = document.querySelectorAll('.testimonial-slide');
    const slideBtnLeft = document.querySelector('.slide-btn--left');
    const slideBtnRight = document.querySelector('.slide-btn--right');
    const dotsContainer = document.querySelector('.dots');

    let currentSlide = 0;
    const maximumSlide = slides.length - 1;

    // Functions
    const goToSlide = function (slides, currentSlide) {
      slides.forEach(function (slide, i) {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
      });
    };

    const createDots = function (slides) {
      slides.forEach(function (_, i) {
        dotsContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dot" data-slide="${i}">&nbsp;</button>`
        );
      });
    };

    const activateDot = function (curSlide) {
      document.querySelectorAll('.dot').forEach(function (dot) {
        dot.classList.remove('dot-active');
      });

      document
        .querySelector(`.dot[data-slide="${curSlide}"]`)
        .classList.add('dot-active');
    };

    const nextSlide = function () {
      currentSlide = currentSlide === maximumSlide ? 0 : currentSlide + 1;

      goToSlide(slides, currentSlide);
      activateDot(currentSlide);
    };

    const prevSlide = function () {
      currentSlide = currentSlide === 0 ? maximumSlide : currentSlide - 1;

      goToSlide(slides, currentSlide);
      activateDot(currentSlide);
    };

    // Initial position
    goToSlide(slides, 0);
    createDots(slides);
    activateDot(0);

    dotsContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dot')) {
        currentSlide = Number(e.target.dataset.slide);
        goToSlide(slides, currentSlide);
        activateDot(currentSlide);
      }
    });

    slideBtnRight.addEventListener('click', nextSlide);
    slideBtnLeft.addEventListener('click', prevSlide);

    setInterval(function () {
      nextSlide();
    }, 4000);
  }
}

const testimonialSlider = new TestimonialSlider();

// class Header {
//   constructor() {
//     const header = document.querySelector('.header');
//     const navList = document.querySelector('.nav-list');

//     navList.addEventListener('mouseenter', function () {
//       header.classList.add('changed-header');
//       header.querySelectorAll('.nav-link').forEach(function (link) {
//         link.classList.add('changed-navlinks');
//       });
//       header
//         .querySelector('.website-logo')
//         .classList.add('changed-website-logo');
//     });

//     navList.addEventListener('mouseleave', function () {
//       header.classList.remove('changed-header');
//       header.querySelectorAll('.nav-link').forEach(function (link) {
//         link.classList.remove('changed-navlinks');
//       });
//       header
//         .querySelector('.website-logo')
//         .classList.remove('changed-website-logo');
//     });
//   }
// }

// const header = new Header();
