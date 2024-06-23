import { imageFullContent } from "../../global/elements/element-html.js";

export default class ImageFull {
  constructor(img, content) {
    this.image = document.querySelectorAll(img)
    this.content = document.querySelector(content);
  }

  eventImage() {
    this.image.forEach((img) => {
      img.addEventListener('click', () => {
        this.updateImage(img)
      })
    });
  }

  updateImage(img) {
    this.content.classList.add('active');
    document.body.style.overflow = 'hidden';
    if(this.content.classList.contains('active')) {
      this.content.insertAdjacentHTML('beforeend', imageFullContent(img.src));
    }
  }

  removeImage() {
    window.addEventListener('click', (el) => {
      if(el.target.classList.contains('modal-close')){
        if(this.content.lastElementChild.id === 'fade-image-project') {
          this.content.lastElementChild.remove();
        }

        this.content.classList.remove('active')
        document.body.style.overflow = '';
      }
    })
  }

  init() {
    this.eventImage();
    this.removeImage();
  }
}