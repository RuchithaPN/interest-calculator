import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/CalorieService/UserService.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  convertedRecord: FormGroup;
  convertedRecordResult: any
  user: import("c:/Users/241352/Desktop/Angular/interest-calculator/src/app/CalorieModel/user").User[];
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.convertedRecord = this.formBuilder.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      activityLevel: ['', Validators.required]
    })
  }
  calculateBmr() {
    if (this.convertedRecord.valid) {
      this.userService.addrecord(this.convertedRecord.value).subscribe({
        next: (data) => {
          this.convertedRecordResult = data
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        }
      });
    }

  }

  getHistory() {

    if (this.convertedRecord.valid) {

      this.userService.getHistory().subscribe({

        next: (data) => {

          this.user = data;

          console.log(data);

        },

        error: (e) => {

          console.log(e);

        }

      });

    }
  }
}
