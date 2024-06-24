import { LiProjectPresentation } from '../../global/content/element-html.js';
import { infoProjectApresentation } from './info-project.js';

export default class LoadProjectContent {
    constructor(elementSelector) {
        this.ulContent = document.querySelector(elementSelector);
    }

    updateContent() {
        if(this.ulContent) {
            infoProjectApresentation.forEach((el) => {
                this.ulContent.innerHTML += LiProjectPresentation(
                    el.title,
                    el.description,
                    el.image,
                    el.title,
                    el.dataAnime,
                    el.initialDate,
                    el.iconsSvg.image
                )
            });
        }
    }

    init() {
        this.updateContent();
    }
}