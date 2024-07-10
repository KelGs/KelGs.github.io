export default class ShowHiddenText {
    constructor(ulSelector) {
        this.ulContent = document.querySelector(ulSelector);
        this.mobileBreakpoint = 500;
    }

    toggleUlContent(ev) {
        const element = ev.target;
        element.classList.contains('btn-show') && this.ulContent.classList.add('active');
        element.classList.contains('btn-hide') && this.ulContent.classList.remove('active');
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