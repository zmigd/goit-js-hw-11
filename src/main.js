import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = form.elements['search-text'].value.trim();

  if (input !== '') {
    clearGallery();
    getImagesByQuery(input);
  } else {
    console.warn('Введіть слово для пошуку!');
  }
});
