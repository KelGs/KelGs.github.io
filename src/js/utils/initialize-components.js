import LoadComponent from "../global/update/load-component.js";

const componentsToLoad = [
    { loadClass: LoadComponent, args: ['/src/components/header.html', '.header'] },
    { loadClass: LoadComponent, args: ['/src/components/footer.html', '.footer'] },
  ]
  
export const initializeComponents = () => {
    componentsToLoad.forEach(({ loadClass, args }) => {
      const component = new loadClass(...args);
      component.init();
    });
  };