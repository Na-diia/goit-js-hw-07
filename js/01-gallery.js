import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    divGallery : document.querySelector('.gallery'),
}

const createMarkupGallery = items =>  {
   return items.map((item) => `<div class="gallery__item">
   <a class="gallery__link" href="${item.original}" >
     <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"/>
   </a>
 </div>`).join("");
};

const addMarkupGallery = createMarkupGallery(galleryItems);

refs.divGallery.innerHTML = addMarkupGallery;

const onImgClick = event => {
    event.preventDefault();
  if (event.target.nodeName !== 'IMG')  {
    return;
  };

  const instance = basicLightbox.create(`
     <img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show();

 refs.divGallery.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        instance.close();
    } instance.close();
   }, {once : true});
};

refs.divGallery.addEventListener('click', onImgClick);

console.log(galleryItems);