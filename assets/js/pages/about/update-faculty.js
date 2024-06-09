import { FacultyContent } from "../../global/elements/element-html.js";
import { infoFaculty } from "./info-faculty.js";


export default class UpdateFaculty {
    constructor(content) {
        this.content = document.querySelector(content)
    }

    updateContent() {
        if(this.content) {
            infoFaculty.forEach(({date, href, faculty, university}) => {
                this.content.innerHTML += FacultyContent(
                    date,
                    href,
                    faculty,
                    university
                )
            })
        }
    }

    init() {
        this.updateContent();
    }
}