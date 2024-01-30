import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterestCalculation } from '../model/interest-calculation';

@Injectable({
  providedIn: 'root'
})
export class InterestCalculationService {
  private baseUrl = 'http://localhost:8083/interest';

  private apiUrl = 'http://localhost:8083/simple/history';

  constructor(private http: HttpClient) { }

  calculateInterest(calculation: InterestCalculation): Observable<InterestCalculation> {
    return this.http.post<InterestCalculation>(`${this.baseUrl}/simple/calculate`, calculation);
  }

  getAllCalculations(): Observable<InterestCalculation[]> {
    return this.http.get<InterestCalculation[]>(this.apiUrl);
  }

}
