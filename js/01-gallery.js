import { galleryItems } from './gallery-items.js';



const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImageCardsMarkup(galleryItems);
const img = document.querySelector('.gallery__image');



galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', zoomImage);


function createImageCardsMarkup (galleryItems) {

    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join('');

    return markup;
}


function zoomImage (event) {
    event.preventDefault();
    const isImage = event.target.classList.contains("gallery__image");
    if(!isImage)return;
    const instance = basicLightbox.create(`
        <img class="original-image" src='${event.target.getAttribute('data-source')}'>      
    `)
    instance.show()
}


