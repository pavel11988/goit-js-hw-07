import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', openSimpleLightBox)


function createImageCardsMarkup (galleryItems) {

    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`}).join('');

    return markup;
}


function openSimpleLightBox (event) {
    event.preventDefault();
    let gallery = new SimpleLightbox('.gallery a', {
        captions:true,
        captionDelay: 250,
        captionSelector:'img',
        captionType:'attr',
        captionPosition:'bottom',
        captionsData:'alt',
    });

    gallery.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
    });
}
