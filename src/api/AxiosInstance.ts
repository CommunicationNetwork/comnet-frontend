import { Axios } from 'axios-observable';

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:8080/'
});

export {
    axiosInstance
};