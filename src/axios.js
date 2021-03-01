import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// EXAMPLE GET
// instance.get("/foo-bar");

export default instance;