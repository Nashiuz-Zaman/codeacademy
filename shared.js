'use-strict';

/////////////////////////////////////////////
// Complete mobile nav functionality

class MobileNav {
  constructor() {
    /////////////////////////////////////////////
    // Inner dropdown menu variables

    const caretRight = document.querySelector('.dropdown-caret');
    const dropdownMenu = document.querySelector('.m-dropdown-container');
    let dropdownState = false;
    dropdownMenu.style.maxHeight = 0;

    /////////////////////////////////////////////
    // Outer mobile navigation variables

    const navBtn = document.querySelector('.mobile-nav-button');
    const mobileNavMenu = document.querySelector('.mobile-nav');
    let navState = false;
    navBtn.querySelector('.ph-x').classList.add('hide-button');

    /////////////////////////////////////////////
    // Inner dropdown menu functionality

    const dropdownToggle = function () {
      dropdownState = dropdownState === false ? true : false;

      if (dropdownState === true) {
        dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
        caretRight.style.transform = 'rotateZ(90deg)';
      }

      if (dropdownState === false) {
        dropdownMenu.style.maxHeight = '0';
        caretRight.style.transform = 'rotateZ(0deg)';
      }
    };

    /////////////////////////////////////////////
    // Outer mobile navigation functionality

    const mobileNavToggle = function () {
      navState = navState === false ? true : false;

      if (navState === true) {
        navBtn.querySelector('.ph-list').classList.add('hide-button');
        navBtn.querySelector('.ph-x').classList.remove('hide-button');
        mobileNavMenu.classList.add('openMobileNav');
      }

      closeMobileNav();
    };

    /////////////////////////////////////////////
    // Close the mobile nav functionality

    const closeMobileNav = function () {
      if (navState === false) {
        dropdownState = false;
        dropdownMenu.style.maxHeight = '0';
        caretRight.style.transform = 'rotateZ(0deg)';
        navBtn.querySelector('.ph-list').classList.remove('hide-button');
        navBtn.querySelector('.ph-x').classList.add('hide-button');
        mobileNavMenu.classList.remove('openMobileNav');
      }
    };

    ///////////////////////////////////////////////////////////////
    // Event listeners

    mobileNavMenu.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('nav-link') ||
        e.target.classList.contains('dropdown-menu-inner-nav-link')
      ) {
        const clicked = e.target;

        if (clicked.classList.contains('dropdown-button')) {
          e.preventDefault();
          dropdownToggle();
        }

        if (!clicked.classList.contains('dropdown-button')) {
          navState = false;
          closeMobileNav();
        }
      }
    });

    navBtn.addEventListener('click', mobileNavToggle);
  }
}

const mobileNav = new MobileNav();

/////////////////////////////////////////////
// Footer Year Functionality
class FooterYear {
  constructor() {
    const year = document.querySelector('.copyright-year');

    const curYear = new Date().getFullYear();

    year.textContent = curYear;
  }
}

const footerYear = new FooterYear();
