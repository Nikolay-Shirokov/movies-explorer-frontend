import { calcPath } from "./utils";

class Api {

  constructor(options) {
    this._options = options;
  }

  _sendQuery(url, queryParams = {}) {
    queryParams.credentials = 'include';
    return fetch(`${this._options.baseUrl}/${url}`, queryParams)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getUserInfo() {
    return this._sendQuery('users/me');
  }

  patchUserInfo(userInfo) {
    const queryParams = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email
      })
    }
    return this._sendQuery('users/me', queryParams);
  }

  signup(userInfo) {
    const queryParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    return this._sendQuery('signup', queryParams)
  }

  signin(userInfo) {
    const queryParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    return this._sendQuery('signin', queryParams)
  }

  signout() {
    const queryParams = {
      method: 'GET',
    }
    return this._sendQuery('signout', queryParams)
  }

  getSavedMovies() {
    const queryParams = {
      method: 'GET',
    }
    return this._sendQuery('movies', queryParams)
  }

  postSavedMovie(movie) {
    const queryParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: calcPath(movie.image.url),
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }
    return this._sendQuery('movies', queryParams)
  }

  deleteSavedMovie(movieId) {
    const queryParams = {
      method: 'DELETE',
    }
    return this._sendQuery(`movies/${movieId}`, queryParams);
  }

}

// Инициализация АПИ
const api = new Api({
  baseUrl: 'https://movies-explorer.nshirokov.nomoredomains.xyz/api'
});

export default api;
