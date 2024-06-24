import initializePageScripts from "../../utils/initialize-page-scripts.js";

export default class InitializeNavigation {
  constructor() {
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.applyEventListeners();
  }

  async handleNavigationClick(event) {
    event.preventDefault();
    const targetUrl = event.target.href;

    if (window.location.href !== targetUrl) {
      window.history.pushState(null, null, targetUrl);
      await this.loadPage(targetUrl);
    }
  }

  async loadPage(url) {

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const pageContent = await response.text();
      this.updateContent(pageContent);
      initializePageScripts();
    } catch (error) {
      console.error('Failed to fetch page:', error);
    }
  }

  updateContent(newContent) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = newContent;

    const newMainContent = tempContainer.querySelector('.content');
    const oldMainContent = document.querySelector('.content');
    const newTitleElement = tempContainer.querySelector('title');

    if (newMainContent && oldMainContent) {
      oldMainContent.innerHTML = newMainContent.innerHTML;
    }

    if (newTitleElement) {
      document.title = newTitleElement.innerText;
    }
  }

  handlePopState() {
    this.loadPage(window.location.href);
  }

  applyEventListeners() {
    window.addEventListener('popstate', this.handlePopState);

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('nav-link')) {
        this.handleNavigationClick(event);
      }
    });
  }

  init() {
    this.applyEventListeners();
  }
}
