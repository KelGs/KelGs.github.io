import { ModalElement } from "../../global/content/element-html.js";

export default class ToggleModal {
    constructor(contentModal, btnModal) {
        this.modalElement = document.querySelector(contentModal);
        this.btnModal = document.querySelector(btnModal)
        this.addModalContent = this.addModalContent.bind(this);
        this.removeModalContent = this.removeModalContent.bind(this);

    }

    removeModalContent() {
        this.modalElement.lastElementChild.remove();
    }

    addModalContent() {
        this.modalElement.insertBefore(ModalElement(), this.nextSibling);

        const btnClose = this.modalElement.querySelector('.modal-close');

        btnClose.addEventListener('click', this.removeModalContent);
        btnClose.addEventListener('keyup', ({key}) => key === 'Enter' && this.removeModalContent())
    }

    init() {
        this.btnModal.addEventListener('click', this.addModalContent);

        this.btnModal.addEventListener('keyup', (ev) => {
            ev.key === 'Enter' && this.addModalContent();
        });

    }
}