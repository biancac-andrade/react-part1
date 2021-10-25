import axios from "axios";

export const jokeURL = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
});


export const webhook = axios.create({
    baseURL: 'https://webhook.site/b5fe12f8-30bb-4bfa-84db-ae308c4f6adb'
});
