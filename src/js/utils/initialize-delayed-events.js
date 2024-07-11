import EnableAccessibilityFeatures from "../global/acessibility/tab-acessibility.js";
import ActivateButtonNavigation from "../global/navigation/active-btn-nav.js";
import ActivateNavigationLinks from "../global/navigation/active-link-nav.js";
import socialLink from "../global/navigation/social-links.js";

export const initializeDelayedEvents = () => {
  const enableAccessibilityFeatures = new EnableAccessibilityFeatures();
  enableAccessibilityFeatures.init();

  const activateNavigationLinks = new ActivateNavigationLinks('.header', '.nav-link');
  activateNavigationLinks.init();

  const buttonNavigation = new ActivateButtonNavigation('.header', '.btn-mobile', '.btn-social');
  buttonNavigation.init();

  socialLink();

};