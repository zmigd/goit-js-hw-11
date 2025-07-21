
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) gallery.innerHTML = '';
}

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images.map(({ webformatURL, largeImageURL, tags }) => {
    return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
      </li>`;
  }).join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }
}

export function showLoader() {
  document.querySelector('.loader')?.classList.remove('is-hidden');
}

export function hideLoader() {
  document.querySelector('.loader')?.classList.add('is-hidden');
}
