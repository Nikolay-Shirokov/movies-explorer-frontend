import { BASE_IMAGE_URL } from "./const";

export function handleError(err) {
  console.error(err);
}

export function calcPath(url) {
  return BASE_IMAGE_URL + url;
}

export function defineSavedState(moviesArray, savedMovies) {
  if (savedMovies.length === 0) {
    return moviesArray;
  }
  const savedMoviesMap = new Map();
  savedMovies.forEach(movie => {
    savedMoviesMap.set(movie.movieId, true);
  })
  return moviesArray.map(movie => {
    movie.isSaved = (savedMoviesMap.get(movie.id) === true)
    return movie;
  });
}
