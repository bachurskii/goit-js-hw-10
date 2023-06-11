import { errorMessage } from './error';
import { fetchCatByBreed } from './cat-api';
import refs from './refs';
import { createMarkup } from './markup';

refs.select.addEventListener('change', onChangeSelect);

let isFirstLoad = true;
function onChangeSelect(e) {
  if (isFirstLoad) {
    return (isFirstLoad = false);
  }

  refs.loader.classList.remove('is-hidden');
  refs.container.classList.add('is-hidden');
  refs.error.classList.add('is-hidden');
  const breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(response => {
      const markup = createMarkup(response);
      refs.container.innerHTML = markup;
      refs.loader.classList.add('is-hidden');
      refs.container.classList.remove('is-hidden');
    })
    .catch(err => {
      errorMessage();
    });
}
