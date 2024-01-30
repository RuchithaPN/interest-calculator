import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Salary } from 'src/app/SalaryModel/SalaryCalculator';
import { SalaryCalculatorService } from 'src/app/SalaryService/salary-calculator.service';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {


  salaryCalculator = new Salary();
  calculator: Salary[] = [];
  convertedRecord: FormGroup;
  showTotal = false;

  constructor(private salaryService: SalaryCalculatorService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  onSubmit() {
    console.log("inside component", this.salaryCalculator);
    const obj = this;
    obj.salaryService.addrecord(obj.salaryCalculator).subscribe(data => {
      console.log(data);
      obj.salaryCalculator.grossSalary = data.grossSalary;
      obj.salaryCalculator.netSalary = data.netSalary;
      obj.salaryCalculator.taxAmount = data.taxAmount;
      obj.salaryCalculator.tax = data.tax;
      obj.salaryCalculator.taxLiability = data.taxLiability;
      obj.salaryCalculator.taxPayable = data.taxPayable;
      obj.salaryCalculator.cess = data.cess;
      obj.salaryCalculator.surCharge = data.surCharge;
      obj.showTotal = true;
    })
    //  alert('')
  }

  getHistory() {
    this.salaryService.getHistory().subscribe(res => {
      this.calculator = res;
      console.log(res)
    })
  }

}
