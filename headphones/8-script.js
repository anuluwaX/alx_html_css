document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navMobile = document.querySelector('.nav-list-mobile');

  menuIcon.addEventListener('click', function () {
    navMobile.classList.toggle('show');
  });
});