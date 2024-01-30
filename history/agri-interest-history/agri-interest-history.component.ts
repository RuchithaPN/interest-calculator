import { Component, OnInit } from '@angular/core';
import { AgriLoan } from 'src/app/model/agriloan-calculation';
import { AgriloanCalculationService } from 'src/app/service/agriloan-calculation.service';

@Component({
  selector: 'app-agri-interest-history',
  templateUrl: './agri-interest-history.component.html',
  styleUrls: ['./agri-interest-history.component.css']
})
export class AgriInterestHistoryComponent implements OnInit {
  calculations: AgriLoan[];
 

  constructor(private service: AgriloanCalculationService) { }

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