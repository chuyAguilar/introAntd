import axios from 'axios';

export const register = async (username, email, password) => {
    return axios.post('https://lizard-server.vercel.app/api/auth/signup', {
        username,
        email,
        password,
        roles: ['user'],
    });
};

export const loginF = async (email, password) => {
    return axios.post('https://lizard-server.vercel.app/api/auth/signin', {
        email,
        password,
    });
};
