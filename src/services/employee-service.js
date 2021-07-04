import config from '../config/config';
import AxiosService from './axios-service';

const baseUrl = config.baseUrl;
export default class EmployeeService {
    
    addEmployee(data) {
        return AxiosService.postService(`${baseUrl}employee`, data);
    }

    getAllEmployees() {
        return AxiosService.getService(`${baseUrl}employee`);
      }
}