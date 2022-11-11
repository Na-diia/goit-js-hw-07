import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    ulGallery : document.querySelector('.gallery'),
};

const createMarkupGallery = items =>  {
   return items.map((item) => `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}"
        title="" /></a></li>`)
    .join("");
};

const addMarkupGallery = createMarkupGallery(galleryItems);

refs.ulGallery.innerHTML = addMarkupGallery;

const wonderfulGallery = new SimpleLightbox('ul.gallery a', {
    captionDelay : "250ms",
    captionsData : "alt", 
});

