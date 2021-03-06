class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers; 
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    getUserInfo() { 
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    addCard({ name, link}) {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                name,
                link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    removeCard(cardID) {
        return fetch(this._baseUrl + '/cards/' + cardID, {
            headers: this._headers,
            method: "DELETE"
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))

    }

    changeLikeCardStatus (cardID, like) {
        return ((like ? fetch(this._baseUrl + '/cards/likes/' + cardID, {
            headers: this._headers,
            method: "PUT"
        })
        : fetch(this._baseUrl + '/cards/likes/' + cardID, {
            headers: this._headers,
            method: "DELETE"
        }))
            .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        );
    }

    setUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: data.name,
                about: data.title
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

    setUserAvatar(avatar) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

}

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-3",
    headers: {
        authorization: "bbe6c8a6-0cbf-4192-8ad0-65526caf9994",
        "Content-Type": "application/json"
    }
});

export default api;