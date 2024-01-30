import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../CalorieModel/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string ="http://localhost:8765/${userId}/bmr-and-daily-calorie-needs";
  private PUrl: string ="http://localhost:8081/users/create";

  private apiUrl = 'http://localhost:8081/users/history';
  
  
  constructor(private http: HttpClient) {}

  getHistory() {
    return this.http.get<User[]>(this.apiUrl);
  }

  addrecord(data: User) {
    return this.http.post<User>(`${this.PUrl}`, data);
  }


}




