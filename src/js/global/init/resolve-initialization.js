import { initializeComponents } from './initialize-components.js';
import { initializeNavigation } from './initialize-navigation.js';
import initializePageScripts from './initialize-page-scripts.js';
import { initializeDelayedEvents } from './initialize-delayed-events.js';

function initializeComponentsAsync() {
    return new Promise((resolve, reject) => {
        try {
            initializeComponents();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

async function resolveInitialization() {
    try {
        await initializeComponentsAsync();
        initializeNavigation();

        setTimeout(() => {
            initializePageScripts();
            initializeDelayedEvents();
        }, 300);
    } catch (error) {
        console.error('Erro durante a inicialização:', error);
    }
}

export default resolveInitialization;