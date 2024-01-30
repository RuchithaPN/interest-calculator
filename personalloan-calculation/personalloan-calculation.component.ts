import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonalLoan } from '../model/personalloan-calculation';
import { PersonalloanCalculationService } from '../service/personalloan-calculation.service';

@Component({
  selector: 'app-personalloan-calculation',
  templateUrl: './personalloan-calculation.component.html',
  styleUrls: ['./personalloan-calculation.component.css']
})
export class PersonalloanCalculationComponent implements OnInit {
  calculation: PersonalLoan = new PersonalLoan();
  result: PersonalLoan = new PersonalLoan;

  constructor(private service: PersonalloanCalculationService) {

   }

  ngOnInit(): void {
  }

  calculateInterest() {
    this.service.calculateInterest(this.calculation).subscribe(
      result => {
        this.result = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  
  @Input() clickedButtonId: string;
  @Output() closed = new EventEmitter<string>();

  closePopup(buttonId: string) {
    this.closed.emit(buttonId);
  }

}