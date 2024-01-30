import { Component, OnInit } from '@angular/core';
import { GoldLoan } from 'src/app/model/goldloan-calculation';
import { GoldloanCalculationService } from 'src/app/service/goldloan-calculation.service';

@Component({
  selector: 'app-gold-interest-history',
  templateUrl: './gold-interest-history.component.html',
  styleUrls: ['./gold-interest-history.component.css']
})
export class GoldInterestHistoryComponent implements OnInit {

  calculations: GoldLoan[];
 

  constructor(private service: GoldloanCalculationService) { }

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
