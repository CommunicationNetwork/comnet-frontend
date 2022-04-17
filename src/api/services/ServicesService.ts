import ServiceStatusResponse from '../../model/ServicesModel';
import { axiosInstance } from '../AxiosInstance';

class ServicesService {
    static async getServiceStatus(): Promise<ServiceStatusResponse> {
        try {
            const { data, status } = await axiosInstance.get<ServiceStatusResponse>('/service/status')
            if(status === 200) return data;
            return { backend: false, proxy: false, flightComputer: false }
        } catch(e) {
            return { backend: false, proxy: false, flightComputer: false }
        }
    }
}

export default ServicesService