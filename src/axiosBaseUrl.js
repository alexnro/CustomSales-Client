import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44345/api'
});

export default instance;