class Api {

  constructor(options) {
    this._options = options;
  }

  _sendQuery(url, queryParams = {}) {
    return fetch(`${this._options.baseUrl}/${url}`, queryParams)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getAllMovies() {
    return this._sendQuery('beatfilm-movies');
  }

}

// Инициализация АПИ
const moviesApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/'
});

export default moviesApi;
