import { ModalElement } from "../../global/content/element-html.js";

export default class ToggleModal {
    constructor(modalSelector) {
        this.modalElement = document.querySelector(modalSelector);
        this.currentPath = window.location.pathname;
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }

    toggleModalContent() {
        this.modalElement.classList.toggle('active');

        if (this.modalElement.classList.contains('active')) {
            this.modalElement.insertAdjacentHTML('beforeend', ModalElement());
        } else if (this.modalElement.lastElementChild) {
            this.modalElement.lastElementChild.remove();
        }
    }

    handleClick(event) {
        if (event.target.classList.contains('modal-close') || event.target.classList.contains('title-alert')) {
            this.toggleModalContent();
        }
    }

    handleKeyup(event) {
        if (event.key === "Enter" && (event.target.classList.contains('modal-close') || event.target.classList.contains('title-alert'))) {
            this.toggleModalContent();
        }
    }

    addEventListeners() {
        if (["/", "/index.html"].includes(this.currentPath)) {
            window.addEventListener('click', this.handleClick);
            window.addEventListener('keyup', this.handleKeyup);
        }
    }

    init() {
        this.addEventListeners();
    }
}
