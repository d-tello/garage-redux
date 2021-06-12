/* eslint-disable arrow-parens */
export const FETCH_CARS = "FETCH_POSTS";

export function fetchCars(garage) {
  const promise = fetch(
    `https://wagon-garage-api.herokuapp.com/${garage}/cars`
  ).then((response) => response.json());
  return {
    type: FETCH_CARS,
    payload: promise,
  };
}
