import ActivateButtonNavigation from "../navigation/active-btn-nav.js";
import ActivateNavigationLinks from "../navigation/active-link-nav.js";


export const initializeDelayedComponents = () => {
    setTimeout(() => {
      const buttonNavigation = new ActivateButtonNavigation('.header', '.btn-mobile', '.btn-social');
      buttonNavigation.init();
  
      const activateNavigationLinks = new ActivateNavigationLinks('.header', '.nav-link');
      activateNavigationLinks.init();
    }, 200);
  };