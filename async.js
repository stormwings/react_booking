import axios from 'axios';

export function callbackHell(callback) {
    callback('Hola Javascripters');
};

export const getDataFromApi = (url) => {
    return axios.get(url)
        .then(({ data }) => {
            return data;
        });
};