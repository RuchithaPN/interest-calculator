import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgriloanCalculationService } from '../service/agriloan-calculation.service';
import { AgriLoan } from '../model/agriloan-calculation';

@Component({
  selector: 'app-agriloan-calculation',
  templateUrl: './agriloan-calculation.component.html',
  styleUrls: ['./agriloan-calculation.component.css']
})
export class AgriloanCalculationComponent implements OnInit {
  calculation: AgriLoan = new AgriLoan();
  result: AgriLoan = new AgriLoan;

  constructor(private service: AgriloanCalculationService) { }

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

