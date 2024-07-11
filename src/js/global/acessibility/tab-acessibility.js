export default class EnableAccessibilityFeatures {
    elementFocus(el) {
        const elementFocus = el.target;
        if(elementFocus) {
            elementFocus.style.outline = "2px solid var(--contrast)"
            elementFocus.style.transition = ".2s all linear"
        }
    
        elementFocus.addEventListener("focusout", (event) => {
            event.target.style.outline = "transparent"
            elementFocus.style.transition = "initial"
        });
    }

    init() {
        window.addEventListener('keyup', (el) => {
            if(el.key === "Tab") {
                this.elementFocus(el);
            }
        });
    }
}
    

