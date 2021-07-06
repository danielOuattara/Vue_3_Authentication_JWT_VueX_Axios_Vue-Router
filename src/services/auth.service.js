
import axios from 'axios';

const API_URL = "http://localhost:3030/api/auth/";

class AuthService  {
    
    login(user) {
        return axios.post( API_URL + `signin`, {
            username: user.username,
            password: user.password
        })
        .then( res => {
            if (res.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
        })
        // .catch( err => {
        //     console.log(err.message)
        // })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user) {
        return axios.post(API_URL + `signup`, {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();