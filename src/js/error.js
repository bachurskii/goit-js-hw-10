import refs from './refs';
import Notiflix from 'notiflix';

export function errorMessage() {
  refs.loader.classList.add('is-hidden');

  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
}
