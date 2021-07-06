
import axios from 'axios';
import authHeader from './auth.header.js';
const API_URL = "http://localhost:3030/api/test/";

class UserService {

    getPublicContent() {
        return axios.get(API_URL + `all`);
    }

    getUserBoard() {
        return axios.get(API_URL+ `user`, { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL+ `moderator`, { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL+ `admin`, { headers: authHeader() });
    }
}

export default new UserService();