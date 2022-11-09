import axios from '../custom-axios/axios';

const Repository = {

    fetchMovies: () => {
        return axios.get("/movies");
    },
    
    login: (user_username, user_password) => {
        return axios.post("/login", {
            "user_username": user_username,
            "user_password": user_password
        });
    }


}

export default Repository;