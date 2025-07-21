import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = form.elements['search-text'].value.trim();

  if (input !== '') {
    clearGallery();
    getImagesByQuery(input)
      .then(images => {
        if (images && images.length > 0) {
          iziToast.success({
            title: 'Success',
            message: `Found ${images.length} images!`,
            position: 'topRight',
            timeout: 3000,
            color: 'green',
          });
        }
      });
  } else {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
      timeout: 3000,
      color: 'orange',
    });
  }
});
