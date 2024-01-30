import { Component, OnInit } from '@angular/core';
import { InterestCalculation } from 'src/app/model/interest-calculation';
import { InterestCalculationService } from 'src/app/service/interest-calculation.service';

@Component({
  selector: 'app-simple-interest-history',
  templateUrl: './simple-interest-history.component.html',
  styleUrls: ['./simple-interest-history.component.css']
})
export class SimpleInterestHistoryComponent implements OnInit {

  calculations: InterestCalculation[];
 

  constructor(private service: InterestCalculationService) { }

  ngOnInit() {
    this.getCalculations();
  }

  getCalculations() {
    this.service.getAllCalculations().subscribe(
      data => {
        this.calculations = data;
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
}

