import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseURL = "http://localhost:8080/api/v1/employees"


  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }


}
