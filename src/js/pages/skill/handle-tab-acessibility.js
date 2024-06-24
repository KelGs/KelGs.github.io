export default class ShowHiddenText {
    constructor(ulSelector) {
        this.ulContent = document.querySelector(ulSelector);
        this.mobileBreakpoint = 500;
    }

    toggleUlContent(ev) {
        const element = ev.target;

        if (element.classList.contains('btn-show') || 
            element.classList.contains('btn-hide')) {
            this.ulContent.classList.toggle('active');
        }
    }

    checkEvent(ev) {
        if(ev.key === "Enter") {
            this.toggleUlContent(ev);
        }
    }

    handleClick() {
        window.addEventListener('click', (ev) => this.toggleUlContent(ev))
        window.addEventListener('keyup', (ev) => this.checkEvent(ev))
    }

    init() {
        this.handleClick();
    }
}