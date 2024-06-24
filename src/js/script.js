import { initializeComponents } from './utils/initialize-components.js';
import { initializeNavigation } from './utils/initialize-navigation.js';
import initializePageScripts from './utils/initialize-page-scripts.js';
import { initializeDelayedEvents } from './utils/initialize-delayed-events.js';

function initializeComponentsAsync() {
    return new Promise((resolve, reject) => {
        try {
            initializeComponents();
            resolve();
        } catch (error) {
            reject(new Error(error));
        }
    });
};

async function resolveInitialization() {
    try {
        await initializeComponentsAsync();
        initializeNavigation();
        initializePageScripts();

        setTimeout(() => initializeDelayedEvents(), 400);
    } catch (error) {
        console.error('Erro durante a inicialização:', error);
    }
}

resolveInitialization();