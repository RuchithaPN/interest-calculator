import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalLoan } from '../model/personalloan-calculation';

@Injectable({
  providedIn: 'root'
})
export class PersonalloanCalculationService {
  private baseUrl = 'http://localhost:8083/interest';

  private apiUrl = 'http://localhost:8083/interest/personal/history';

  constructor(private http: HttpClient) { }

  calculateInterest(calculation: PersonalLoan): Observable<PersonalLoan> {
    return this.http.post<PersonalLoan>(`${this.baseUrl}/personal/calculate`, calculation);
  }

  getAllCalculations(): Observable<PersonalLoan[]> {
    return this.http.get<PersonalLoan[]>(this.apiUrl);
  }
}
