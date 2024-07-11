export default class LoadComponent {
    constructor(url, selector) {
      this.url = url;
      this.selector = selector;
    }
  
    async init() {
      try {
        const response = await fetch(this.url);
        const html = await response.text();
        document.querySelector(this.selector).innerHTML = html;
      } catch (error) {
        console.error(`Failed to load component ${this.selector}:`, error);
      }
    }
  }
  