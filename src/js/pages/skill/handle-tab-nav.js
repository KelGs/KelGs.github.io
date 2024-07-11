import { LiContent } from "../../global/content/element-html.js";
import skillContent from "./skill-content.js";

export default class HandleTabNavigation {
    constructor(ulSelector, svgSelector) {
        this.ulContent = document.querySelector(ulSelector);
        this.listSvg = document.querySelectorAll(svgSelector);
        this.activeClass = 'active';
        this.mobileBreakpoint = 500;
        this.defaultContentIndex = 4;
    }

    updateContent(index) {
        const { title, content } = skillContent[index];
        this.ulContent.innerHTML = LiContent(title, content);
        this.updateActiveSvg(index);
    }

    updateActiveSvg(index) {
        this.listSvg.forEach((svg, svgIndex) => {
            svg.classList.toggle(this.activeClass, svgIndex === index);
        });
        this.ulContent.classList.remove('show-text');
    }

    handleSvg(el, index) {
        if (!el.classList.contains(this.activeClass)) {
            this.updateContent(index);
        }
    }

    checkEvent() {
        if (this.listSvg.length && this.ulContent) {
            this.updateContent(this.defaultContentIndex);

            this.listSvg.forEach((el, index) => {
                el.addEventListener('click', () => this.handleSvg(el, index));

                el.addEventListener('keyup', ({key}) => key === 'Enter' ? this.handleSvg(el, index) : null);
            });
        }
    }

    init() {
        this.checkEvent();
    }
}