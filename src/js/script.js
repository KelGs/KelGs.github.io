import { initializeComponents } from './utils/initialize-components.js';
import { initializeNavigation } from './utils/initialize-navigation.js';
import initializePageScripts from './utils/initialize-page-scripts.js';
import { initializeDelayedEvents } from './utils/initialize-delayed-events.js';
import initialLoading from './global/update/initial.loading.js';


async function initializeComponentsAsync() {
    return new Promise((resolve, reject) => {
        try {
            initializeComponents();
            initializeNavigation();
            setTimeout(() => {
                resolve(); 
            }, 600);
        } catch (error) {
            reject(new Error(error));
        }
    });
};

async function resolveInitialization() {
    try {
        initialLoading();
        await initializeComponentsAsync();
        initializePageScripts();

        setTimeout(() => {
            initializeDelayedEvents();
        }, 1000);
    } catch (error) {
        console.error('Erro durante a inicialização:', error);
    }
}

resolveInitialization();