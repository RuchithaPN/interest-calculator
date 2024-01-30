import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalLoan } from '../model/personalloan-calculation';
import { HomeLoan } from '../model/homeloan-calculation';

@Injectable({
  providedIn: 'root'
})
export class HomeloanCalculationService {
  private baseUrl = 'http://localhost:8083/interest';

  private apiUrl = 'http://localhost:8083/interest/home/history';

  constructor(private http: HttpClient) { }

  calculateInterest(calculation: PersonalLoan): Observable<PersonalLoan> {
    return this.http.post<PersonalLoan>(`${this.baseUrl}/home/calculate`, calculation);
  }
  getAllCalculations(): Observable<HomeLoan[]> {
    return this.http.get<HomeLoan[]>(this.apiUrl);
  }
}
