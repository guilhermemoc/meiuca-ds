import axios, { AxiosInstance } from 'axios';

const apiKey = '4bcc3199374b429e9f73b60c4a180174'; // Substitua com a sua chave da API

const api: AxiosInstance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        apiKey,
    },
});

export default api;
