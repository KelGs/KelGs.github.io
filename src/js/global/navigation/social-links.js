import { socialLinkElement } from "../content/element-html.js";

export default function socialLink () {
    let socialLink = socialLinkElement();
    const header = document.querySelector('.header');
    header.appendChild(socialLink);
}
