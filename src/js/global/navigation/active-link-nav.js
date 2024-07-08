export default class ActivateNavigationLinks {
  constructor(header, linkNav) {
    this.headerMenu = document.querySelector(header);
    this.linkNavigation = document.querySelectorAll(linkNav);
    this.classActive = 'active';
  }

  activateLink = (targetLink) => {
    this.linkNavigation.forEach(link => link.classList.remove(this.classActive));
    targetLink.classList.add(this.classActive);
    this.headerMenu.classList.remove(this.classActive);
    document.body.style.overflow = '';
  };

  forEachLinks() {
    this.linkNavigation.forEach((link) => {
      link.classList.remove(this.classActive);
  
      if (link.href === window.location.href) {
        link.classList.add(this.classActive);
      }
  
      link.addEventListener('click', (event) => {
        event.preventDefault()
        this.activateLink(event.target);
      });
    });

    if (window.location.pathname === "/") {
      if(this.linkNavigation.length){
        this.linkNavigation[0].classList.add(this.classActive);
      }
    }
  }
  
  init() {
    this.forEachLinks();
  }

};