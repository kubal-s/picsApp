import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID A0LajO_BL1lmSvkwT6MlsFD620CsB-8mCUKtiXr0cdY'
    }
});