export default class LoadComponent {
  constructor(url, selector) {
      this.url = url;
      this.selector = selector;
  }

  async init() {
      try {
          const response = await fetch(this.url);
          if (response.ok) {
              const content = await response.text();
              document.querySelector(this.selector).innerHTML = content;
          } else {
              throw new Error(`Falha ao carregar ${this.url}: ${response.statusText}`);
          }
      } catch (error) {
          console.error(`Erro ao carregar ${this.url}:`, error);
      }
  }
}