import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './overview.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private readonly http: HttpClient) {
    //
   }

   getEmployeeData(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users');
   }
}
