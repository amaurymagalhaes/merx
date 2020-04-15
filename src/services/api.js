import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.5:3333/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
