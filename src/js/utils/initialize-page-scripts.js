import HandleTabNavigation from "../pages/skill/handle-tab-nav.js";
import AnimateData from "../global/animation/animation.js";
import ToggleModal from "../pages/index/toggle-modal.js";
import LoadProjectContent from '../pages/project/project-content.js';
import CalculateAboutYear from "../pages/about/age-count.js";
import CopyEmail from "../pages/contact/copy-email.js";
import ShowHiddenText from "../pages/skill/handle-tab-acessibility.js";
import ImageFull from "../pages/project/image-full.js";
import UpdateContent from "../pages/skill/update-content.js";

const pageScripts = {
    '/index.html': () => {
        const toggleModal = new ToggleModal('.main-content', '.title-alert');
        toggleModal.init();
    },
    '/': () => {
        const toggleModal = new ToggleModal('.main-content', '.title-alert');
        toggleModal.init();
    },
    '/about.html': () => {
        const calculateAboutYear = new CalculateAboutYear('#year');
        calculateAboutYear.init();

        const imageFull = new ImageFull('.img-aside', '#about');
        imageFull.init();
    },
    '/skill.html': () => {
        const updateContent = new UpdateContent('.svg-list');
        updateContent.init();

        const showHiddenText = new ShowHiddenText('.skill-list');
        showHiddenText.init();

        const handleTabNavigation = new HandleTabNavigation('.skill-list', '.skill-svg');
        handleTabNavigation.init();
    },
    '/project.html': () => {
        const loadProjectContent = new LoadProjectContent('.list-project');
        loadProjectContent.init();

        const imageFull = new ImageFull('.image-project', '#project');
        imageFull.init();
    },
    '/contact.html': () => {
        const copyEmail = new CopyEmail('.contact-email', '.email-text');
        copyEmail.init();
    }
};

const initializePageScripts = () => {
    const pathName = window.location.pathname;
    const script = pageScripts[pathName];
    
    if (script) script();

    const animeData = new AnimateData('.hidden');
    animeData.init();
};

export default initializePageScripts;