export default class ActivateButtonNavigation {
  constructor(header, mobile, social) {
    this.headerMenu = document.querySelector(header);
    this.btnMobile = document.querySelector(mobile);
    this.btnSocial = document.querySelector(social);
    this.navSocial = document.querySelectorAll('.social-link');
  }

  handleButtonClick = () => {
    this.hiddenShowMenu();
  };

  hiddenShowMenu = () => {
    this.headerMenu.classList.toggle('active');
    if(this.headerMenu.classList.contains('active') && window.innerWidth <= 750) {
      document.body.style.overflow = 'hidden';
    } else{
      document.body.style.overflow = '';
    }
  };

  handleButtonKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      this.hiddenShowMenu();
    }
  };

  init() {
    if (this.btnMobile) {
      this.btnMobile.addEventListener('click', this.handleButtonClick);
      this.btnMobile.addEventListener('keyup', this.handleButtonKeyPress);
    }
  
    if (this.btnSocial) {
      this.btnSocial.addEventListener('click', this.handleButtonClick);
      this.btnSocial.addEventListener('keyup', this.handleButtonKeyPress);
    }
    
    if (this.navSocial.length) {
      this.navSocial.forEach((link) => {
        link.addEventListener('click', this.handleButtonClick);
        link.addEventListener('keyup', this.handleButtonKeyPress);
      })
    }
  }
}