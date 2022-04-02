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
        about: userInfo.about
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
}

// Инициализация АПИ
const api = new Api({
  baseUrl: 'https://movies-explorer.nshirokov.nomoredomains.xyz/api'
});

export default api;
