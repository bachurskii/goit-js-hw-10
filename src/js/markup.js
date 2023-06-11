export function createMarkup(object) {
  const image = object[0].url;
  const { name, description, temperament } = object[0].breeds[0];

  return ` 
  <img src="${image}" alt="${name}" width="500" height="400" />
      <div class = "second_container">
        <h2>${name}</h2>
        <p class="paragraph_descrip">${description}</p>
        <p class="paragraph_temperam">Temperamnet:${temperament}</p>
      </div>`;
}
