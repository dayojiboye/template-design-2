const toggleBtnElement = document.querySelector('.mobile-menu-toggle');
const mobileMenuElement = document.getElementById('mobile-menu');
const body = document.body;

const toggleMobileMenuHandler = () => {
  mobileMenuElement.classList.toggle('visible');
  toggleBtnElement.classList.toggle('change');
  body.classList.toggle('fixed');
};

toggleBtnElement.addEventListener('click', toggleMobileMenuHandler);
