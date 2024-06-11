import LoadComponent from "../render/load-component.js";

const componentsToLoad = [
    { loadClass: LoadComponent, args: ['/assets/components/header.html', '.header'] },
    { loadClass: LoadComponent, args: ['/assets/components/footer.html', '.footer'] },
  ]
  
export const initializeComponents = () => {
    componentsToLoad.forEach(({ loadClass, args }) => {
      const component = new loadClass(...args);
      component.init();
    });
  };