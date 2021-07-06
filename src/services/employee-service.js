import config from '../config/config';
import AxiosService from './axios-service';

const baseUrl = config.baseUrl + "/employeepayroll";
export default class EmployeeService {

    addEmployee(data) {
        return AxiosService.postService(`${baseUrl}/create`, data);
    }

    getAllEmployees() {
        return AxiosService.getService(`${baseUrl}/get`);
    }

    getEmployeeById(id) {
        return AxiosService.getService(`${baseUrl}/get/${id}`,id);
    }

    updateEmployee(data) {
        return AxiosService.putService(`${baseUrl}/update/${data.id}`, data);
    }
    
    deleteEmployee(id) {
        return AxiosService.deleteService(`${baseUrl}/delete/${id}`);
      }
}