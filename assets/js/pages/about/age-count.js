export default class CalculateAboutYear {
    constructor(element) {
        this.yearElement = document.querySelector(element);
        this.currentDate = new Date();
        this.birthDate = new Date('Oct 09 1999 00:00:00 GMT-0300');

    }

    calculateAge() {
        const currentYear = this.currentDate.getFullYear();
        const birthYear = this.birthDate.getFullYear();
        let age = currentYear - birthYear;

        const isBirthdayPassed = (this.currentDate.getMonth() >= this.birthDate.getMonth() && this.currentDate.getDate() >= this.birthDate.getDate());

        if (!isBirthdayPassed) {
            age--;
        }

        return age;
        
    }

    updateYearElement() {
        if (window.location.pathname === '/about.html' && this.yearElement) {
            this.yearElement.innerText = this.calculateAge();
        }
    }

    init() {
        this.updateYearElement();
    }
};