import EnableAccessibilityFeatures from "../acessibility/tab-acessibility.js";
import LoadComponent from "../render/load-component.js";

const componentsToLoad = [
    { component: LoadComponent, args: ['/assets/components/header.html', '.header'] },
    { component: LoadComponent, args: ['/assets/components/footer.html', '.footer'] },
    { component: EnableAccessibilityFeatures, args: [] }
  ]
  
export const initializeComponents = () => {
    componentsToLoad.forEach(({ component, args }) => {
      const instance = new component(...args);
      instance.init();
    });
  }; 