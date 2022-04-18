import { axiosInstance } from '../AxiosInstance';
import { catchError, map, Observable, of } from 'rxjs';
import ServiceStatusResponse from 'model/ServicesModel';

class ServicesService {
    getServiceStatus(): Observable<ServiceStatusResponse> {
        return axiosInstance.get<ServiceStatusResponse>('/service/status').pipe(
            map(res => res.data),
            catchError(() => {
                return of({backend: false, proxy: false, flightComputer: false})
            })
        );
    }
}

export default new ServicesService()