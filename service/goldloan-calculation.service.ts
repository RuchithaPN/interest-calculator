import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalLoan } from '../model/personalloan-calculation';
import { GoldLoan } from '../model/goldloan-calculation';

@Injectable({
  providedIn: 'root'
})
export class GoldloanCalculationService {
  private baseUrl = 'http://localhost:8083/interest';

  private apiUrl = 'http://localhost:8083/interest/gold/history';

  constructor(private http: HttpClient) { }

  calculateInterest(calculation: PersonalLoan): Observable<PersonalLoan> {
    return this.http.post<PersonalLoan>(`${this.baseUrl}/gold/calculate`, calculation);
  }

  getAllCalculations(): Observable<GoldLoan[]> {
    return this.http.get<GoldLoan[]>(this.apiUrl);
  }
}
