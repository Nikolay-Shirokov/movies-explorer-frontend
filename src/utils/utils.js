import { BASE_IMAGE_URL } from "./const";

export function handleError(err) {
  console.error(err);
}

export function calcPath(url) {
  return BASE_IMAGE_URL + url;
}
