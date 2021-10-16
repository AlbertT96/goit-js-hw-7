import { galleryItems } from './gallery-items.js';
// Change code below this line
import { createGallery } from './gallery-create.js';
//console.log(galleryItems);


const qs = (selector) => document.querySelector(selector);
const gallery = qs(".gallery");

const setImg = (img, e) => (e.target.src = img);
const keyClose = (e, instance) => {
    if ("Escape" === e.key) {
        instance.close()
    }
}

function lightBox() {
    const createBox = (event) => {
        event.preventDefault()

        let smallImg = event.target.src
        let bigImg = event.target.dataset.source

        basicLightBox.create(`<img width="1400" height="900" src="${bigImg}">`,
            {
                onClose: (instance) => {
                    setImg(smallImg, event)
                    gallery.removeEventListener("keydown", (e) => keyClose(e, instance))
                    return true;
                },
                onShow: (instance) => {
                    setImg(bigImg, event)
                    gallery.addEventListener("keydown", (e) => keyClose(e, instance))
                    return true;
                },
        }).show()
    }
    gallery.addEventListener("click", createBox)
}

const query = ({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"
     data-source="${original}" alt="${description}" /> </a>`
}

function deufaultGallery() {
    gallery.innerHTML = createGallery(galleryItems, query)
    lightBox();
}

deufaultGallery();