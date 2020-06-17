import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44345/api',
    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
});

export default instance;