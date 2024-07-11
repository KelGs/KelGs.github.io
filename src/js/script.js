import { initializeComponents } from './utils/initialize-components.js';
import { initializeNavigation } from './utils/initialize-navigation.js';
import initializePageScripts from './utils/initialize-page-scripts.js';
import { initializeDelayedEvents } from './utils/initialize-delayed-events.js';
import initialLoading from './global/update/initial.loading.js';

async function resolveInitialization() {
  try {
    initialLoading();
    await initializeComponents(); 

    await new Promise(resolve => setTimeout(resolve, 500));

    initializeNavigation();
    initializePageScripts();
    initializeDelayedEvents();
  } catch (error) {
    console.error('Erro durante a inicialização:', error);
  }
}

resolveInitialization();
