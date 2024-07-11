import { imageFullContent } from "../../global/content/element-html.js";

export default class ImageFull {
  constructor(img, content) {
    this.image = document.querySelectorAll(img)
    this.content = document.querySelector(content);
  }

  updateImage(img) {
    document.body.style.overflow = 'hidden';
    this.content.appendChild(imageFullContent(img.src));
    this.removeImage();
  }

  removeImage() {
    document.querySelector('.modal-close').
    addEventListener('click', () => {
      this.content.lastElementChild.remove();
      document.body.style.overflow = '';
    });
  }

  init() {
    this.image.forEach((img) => {
      img.addEventListener('click', () => this.updateImage(img))

      img.addEventListener('keyup', ({key}) => key === 'Enter' && this.updateImage(img))
    } );
  }
}