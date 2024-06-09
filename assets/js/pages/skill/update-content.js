import ListSvg from "./list-svg.js"

export default class UpdateContent {
    constructor(content) {
        this.content = document.querySelector(content)
    }

    updateSvg() {
        this.content.innerHTML = ListSvg();
    }

    init() {
        this.updateSvg();
    }
}