import refs from './refs';

export function onSucces() {
  refs.loader.classList.add('is-hidden');
  refs.select.classList.remove('is-hidden');
}
