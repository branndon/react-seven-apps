import axios from 'axios';

/**
 * API default for service
 */
const API = axios.create({
    baseURL: "https://random-persons.herokuapp.com",
});

export default API;
