import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterestCalculation } from '../model/interest-calculation';
import { InterestCalculationService } from '../service/interest-calculation.service';

@Component({
  selector: 'app-interest-calculation',
  templateUrl: './interest-calculation.component.html',
  styleUrls: ['./interest-calculation.component.css']
})
export class InterestCalculationComponent implements OnInit {
  calculation: InterestCalculation = new InterestCalculation();
  result: InterestCalculation = new InterestCalculation;

  constructor(private service: InterestCalculationService) { }

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
  
  @Output() closed = new EventEmitter<string>();

  closePopup() {
    this.closed.emit('true');

  }
}
