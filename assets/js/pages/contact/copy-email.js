import { showModalEmail } from "../../global/elements/element-html.js";


export default class CopyEmail {
    constructor(element, text) {
        this.element = document.querySelector(element);
        this.text = document.querySelector(text);
        this.seconds = 3;
    }

    openNewWindow() {
        setTimeout(() => {
            window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new');
            if(document.body.lastElementChild.id === 'assinc-email') {
                document.body.lastElementChild.remove();
            }
        }, 3000);
    }

    async copyText() {
        await navigator.clipboard.writeText(this.text.innerText);
    }

    copyEmail(el) {
        el.preventDefault();
        if(window.confirm('Você deseja ser redirecionado ao e-mail externo?')) {
            document.body.insertAdjacentHTML('beforeend', showModalEmail());
            this.copyText();
            this.openNewWindow();
        }
    }

    checkElement() {
        if(this.element) {
            this.element.addEventListener('click', (el) => {
                this.copyEmail(el)
            });
        }
    }

    init() {
        this.checkElement();
    }
}