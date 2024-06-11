import { initializeComponents } from './global/init/initialize-components.js';
initializeComponents();

import { initializeNavigation } from './global/init/initialize-navigation.js';
initializeNavigation();

import initializePageScripts from './global/init/initialize-page-scripts.js';
initializePageScripts();

import { initializeDelayedComponents } from './global/init/initialize-delayed-components.js';
setTimeout(() => {
  initializeDelayedComponents();
}, 100);