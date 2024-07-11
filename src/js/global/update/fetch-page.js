import initializePageScripts from "../../utils/initialize-page-scripts.js";
import { loading } from "../content/element-html.js";

export default class InitializeNavigation {
  constructor() {
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.applyEventListeners();
    this.loadingContent = loading();
  }

  showLoading() {
    document.body.appendChild(this.loadingContent);
    document.body.classList.add('loading');
  }

  hideLoading() {
    document.body.classList.remove('loading');
    document.body.removeChild(this.loadingContent);
  }

  async handleNavigationClick(link) {
    link.preventDefault();
    const targetUrl = link.target.href;

    if (window.location.href !== targetUrl) {
      window.history.pushState(null, null, targetUrl);
      await this.loadPage(targetUrl);
    }
  }

  async loadPage(url) {
    try {
      this.showLoading();
      const response = await fetch(url);
      if (!response.ok) throw new Error('Problema na resposta da rede');
      
      const pageContent = await response.text();
      this.updateContent(pageContent);
      initializePageScripts();
    } catch (error) {
      console.error('Falha ao buscar a página:', error);
    } finally {
      this.hideLoading();
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

    const allLink = document.querySelectorAll('.nav-link');
    allLink.forEach((link) => {
      link.addEventListener('click', this.handleNavigationClick)
    })
  }

  init() {
    this.applyEventListeners();
  }
}
