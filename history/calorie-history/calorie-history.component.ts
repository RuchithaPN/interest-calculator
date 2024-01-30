import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/CalorieModel/user';
import { UserService } from 'src/app/CalorieService/UserService.service';

@Component({
  selector: 'app-calorie-history',
  templateUrl: './calorie-history.component.html',
  styleUrls: ['./calorie-history.component.css']
})
export class CalorieHistoryComponent implements OnInit {
  calculations: User[];
 

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.service.getHistory().subscribe(
      data => {
        this.calculations = data;
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
}