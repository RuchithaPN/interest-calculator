import { Component, OnInit } from '@angular/core';
import { PersonalLoan } from 'src/app/model/personalloan-calculation';
import { PersonalloanCalculationService } from 'src/app/service/personalloan-calculation.service';

@Component({
  selector: 'app-personal-interest-history',
  templateUrl: './personal-interest-history.component.html',
  styleUrls: ['./personal-interest-history.component.css']
})
export class PersonalInterestHistoryComponent implements OnInit {

  calculations: PersonalLoan[];
 

  constructor(private service: PersonalloanCalculationService) { }

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

