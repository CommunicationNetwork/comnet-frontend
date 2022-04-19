import { Axios } from 'axios-observable';

const axiosInstance = Axios.create({
    baseURL: 'http://' + process.env.REACT_APP_BACKEND_HOST + ':' + process.env.REACT_APP_BACKEND_PORT + '/'
});

export {
    axiosInstance
};