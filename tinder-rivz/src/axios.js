import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rivz-tinder-backend.herokuapp.com'
})

export default instance;