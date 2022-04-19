import { Axios } from 'axios-observable';
import Config from 'Config';

const axiosInstance = Axios.create({
    baseURL: Config.baseUrl
});

export {
    axiosInstance
};