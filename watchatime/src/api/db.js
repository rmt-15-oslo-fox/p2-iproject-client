import axios from 'axios';

const db = axios.create({
    baseURL: 'https://db-porto.herokuapp.com',
});

export default db;