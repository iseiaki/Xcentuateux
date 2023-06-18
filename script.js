AOS.init();

const closeNav = document.querySelector('.close-nav');
const navbarNav = document.querySelector('.navbar-nav');
const opener = document.querySelector('.menu-icon');

opener.addEventListener('click', () => {
  navbarNav.classList.remove('sj');
  navbarNav.classList.add('navbar-nav');
  $('.navbar').toggleClass('show-nav');
});

closeNav.addEventListener('click', () => {
  navbarNav.classList.remove('navbar-nav');
  navbarNav.classList.add('sj');
  $('.navbar').removeClass('show-nav');
});
  AOS.init();

  window.addEventListener('scroll', function() {
    var secondPage = document.querySelector('#Philosophy');
    var navbar = document.querySelector('.navbar');
  
    if (window.scrollY >= 50) {
      navbar.classList.add('show');
    } else {
      navbar.classList.remove('show');
    }
  });