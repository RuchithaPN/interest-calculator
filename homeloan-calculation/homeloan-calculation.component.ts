import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeloanCalculationService } from '../service/homeloan-calculation.service';
import { HomeLoan } from '../model/homeloan-calculation';

@Component({
  selector: 'app-homeloan-calculation',
  templateUrl: './homeloan-calculation.component.html',
  styleUrls: ['./homeloan-calculation.component.css']
})
export class HomeloanCalculationComponent implements OnInit {
  calculation: HomeLoan = new HomeLoan();
  result: HomeLoan = new HomeLoan;

  constructor(private service: HomeloanCalculationService) { }

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
