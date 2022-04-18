import ServiceStatusResponse from '../../model/ServicesModel';
import { axiosInstance } from '../AxiosInstance';
import { map, Observable } from 'rxjs';

class ServicesService {
    getServiceStatus(): Observable<ServiceStatusResponse> {
        return axiosInstance.get<ServiceStatusResponse>('/service/status').pipe(
            map(res => res.data)
        );
    }
}

export default new ServicesService()