import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://apirestcustomsales.azurewebsites.net/api'
});

export default instance;