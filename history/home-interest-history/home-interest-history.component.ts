import { Component, OnInit } from '@angular/core';
import { HomeLoan } from 'src/app/model/homeloan-calculation';
import { HomeloanCalculationService } from 'src/app/service/homeloan-calculation.service';

@Component({
  selector: 'app-home-interest-history',
  templateUrl: './home-interest-history.component.html',
  styleUrls: ['./home-interest-history.component.css']
})
export class HomeInterestHistoryComponent implements OnInit {

  calculations: HomeLoan[];
 

  constructor(private service: HomeloanCalculationService) { }

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

