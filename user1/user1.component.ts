import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'user.service';
import { User } from '../CalorieModel/user';

@Component({
  selector: 'app-user',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {
  phoneNumber: any;
  otp: any;
  registerSuccess: any;
  errorMessage: any;
  verificationMessage: any;
  message: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  registerUser() {

    this.userService.registerUser(this.phoneNumber).subscribe(

      (response) => {

        response == true;
        this.message = true;
        this.registerSuccess = true;
        this.errorMessage = null;

      },

      (error) => {
        this.registerSuccess = false;
        this.errorMessage = error.error.message;
      }
    );
  }
  verifyOtp() {
    this.userService.verifyOtp(this.phoneNumber, this.otp).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['/welcome']);
        //  this.message = 'OTP verified successfully';
      },

      error => {

        console.error(error);
        alert("Invalid otp")
        console.log("invalid")

        // this.message = 'Invalid OTP';
      }
    );
  }
}
