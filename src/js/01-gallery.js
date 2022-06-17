import { galleryItems } from './gallery-items.js';
import '../css/01-gallery.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const parentGallery = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);
parentGallery.insertAdjacentHTML('beforeend', galleryImages);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></div>`
    )
    .join('');
}
