import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiecoletav1.herokuapp.com'
});

export default api;