export default class ShowHiddenText {
    constructor(ulSelector) {
        this.ulContent = document.querySelector(ulSelector);
        this.mobileBreakpoint = 500;
    }

    toggleUlContent({target}) {
        const toggleClasses = ['btn-show', 'btn-hide'];

        if (toggleClasses.some(cls => target.classList.contains(cls))) {
            this.ulContent.classList.toggle('show-text');
        }
    }

    handleClick() {
        window.addEventListener('click', (ev) => this.toggleUlContent(ev))
        window.addEventListener('keyup', (ev) => {
            if(ev.key === "Enter") {
                this.toggleUlContent(ev);
            }
        })
    }

    init() {
        this.handleClick();
    }
}