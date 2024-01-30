import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GoldloanCalculationService } from '../service/goldloan-calculation.service';
import { GoldLoan } from '../model/goldloan-calculation';


@Component({
  selector: 'app-goldloan-calculation',
  templateUrl: './goldloan-calculation.component.html',
  styleUrls: ['./goldloan-calculation.component.css']
})
export class GoldloanCalculationComponent implements OnInit {
  calculation: GoldLoan = new GoldLoan();
  result: GoldLoan = new GoldLoan;

  constructor(private service: GoldloanCalculationService) { }

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
