import { fetchBreeds } from './cat-api';
import { errorMessage } from './error';
import { onSucces } from './succes';
import refs from './refs';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = new SlimSelect({
  select: '#selectElement',
});

fetchBreeds()
  .then(response => {
    const options = response.map(el => {
      return { text: el.name, value: el.id };
    });

    select.setData(options);

    onSucces();
  })
  .catch(err => {
    errorMessage();
  });

// fetchBreeds().then(response => {
//   const options = response
//     .map(el => {
//       return `
//        <option value="${el.id}">${el.name}</option>
//     `;
//     })
//     .join('');
//   console.log(options);
//   refs.select.insertAdjacentHTML('afterbegin', options);
// });
