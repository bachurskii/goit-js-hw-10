const API_KEY =
  'live_bv9tvTXXqygEE2ubZ5UKLEE9Lmkq0wz3Ra3ATvVTOQJdAbapdHqdv3QXhO5o0alu';
const BASE_URL = 'https://api.thecatapi.com/v1';
export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    ` ${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
