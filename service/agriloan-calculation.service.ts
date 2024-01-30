import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgriLoan } from '../model/agriloan-calculation';

@Injectable({
  providedIn: 'root'
})
export class AgriloanCalculationService {
  private baseUrl = 'http://localhost:8083/interest';

  private apiUrl = 'http://localhost:8083/interest/agri/history';

  constructor(private http: HttpClient) { }

  calculateInterest(calculation: AgriLoan): Observable<AgriLoan> {
    return this.http.post<AgriLoan>(`${this.baseUrl}/agri/calculate`, calculation);
  }

  getAllCalculations(): Observable<AgriLoan[]> {
    return this.http.get<AgriLoan[]>(this.apiUrl);
  }
}
