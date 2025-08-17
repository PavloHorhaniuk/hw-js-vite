import { galleryItems } from './galleryItems.js';

import { openModal } from './modal.js';

// console.log("galleryItems:", galleryItems);
const imgBox = document.querySelector('.gallery');

console.log(imgBox)

function createImageCardsMarkup(array) {
    return array
        .map(({ preview, original, description }) => {
            return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
        `
        })
   .join('');
}

const imageMarkup = createImageCardsMarkup(galleryItems)

imgBox.innerHTML = imageMarkup

imgBox.addEventListener('click', (e) => {
  e.preventDefault();
  const img = e.target.closest('.gallery__image');
  if (!img) return;

  openModal(img.dataset.source, galleryItems);
});