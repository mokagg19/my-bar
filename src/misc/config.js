const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  return response;
}
