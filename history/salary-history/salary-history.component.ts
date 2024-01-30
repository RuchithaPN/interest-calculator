import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/SalaryModel/SalaryCalculator';
import { SalaryCalculatorService } from 'src/app/SalaryService/salary-calculator.service';

@Component({
  selector: 'app-salary-history',
  templateUrl: './salary-history.component.html',
  styleUrls: ['./salary-history.component.css']
})
export class SalaryHistoryComponent implements OnInit {
  calculations: Salary[];
 

  constructor(private service: SalaryCalculatorService) { }

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
