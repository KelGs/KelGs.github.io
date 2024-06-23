export default class AnimateData {
    constructor(hidden) {
        this.hiddenElements = document.querySelectorAll(hidden);
    }
    
    observer() { 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show')
                    entry.target.classList.remove('hidden')
                }
            })
        });

        this.hiddenElements.forEach((element) => {
            observer.observe(element)
        });
    }

    init() {
        this.observer();
    }
}