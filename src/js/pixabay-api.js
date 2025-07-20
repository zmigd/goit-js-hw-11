import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery } from './render-functions';
import { showLoader, hideLoader } from './render-functions';

const API_KEY = '51403222-4fbdc3af82d89be9b055ca0a4';
const URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');


export function getImagesByQuery(query) {
    showLoader();
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
        hideLoader()
      const images = res.data.hits;
      if (images.length === 0) {
        document.querySelector('.gallery').innerHTML = '';
        iziToast.error({
          title: 'Sorry',
          message: 'There are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 5000,
          color: 'red',
        });
        return;
      }
      createGallery(images);
    })
    .catch(error => {
        hideLoader()
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        timeout: 5000,
        color: 'red',
      });
      console.error(error);
    });
}
