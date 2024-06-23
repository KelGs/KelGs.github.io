import EnableAccessibilityFeatures from "../acessibility/tab-acessibility.js";
import ActivateButtonNavigation from "../navigation/active-btn-nav.js";
import ActivateNavigationLinks from "../navigation/active-link-nav.js";

export const initializeDelayedEvents = () => {
  const enableAccessibilityFeatures = new EnableAccessibilityFeatures();
  enableAccessibilityFeatures.init();

  const activateNavigationLinks = new ActivateNavigationLinks('.header', '.nav-link');
  activateNavigationLinks.init();

  const buttonNavigation = new ActivateButtonNavigation('.header', '.btn-mobile', '.btn-social');
  buttonNavigation.init();
};