import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:65',
});

export default instance;
