import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForms: any;
  cPHasError = true;
  userTaken = false;
  constructor(private cs: CustomerService, private router: Router) {
    
    this.signupForms = {
      userId: '',
      userName: '',
      contactNumber: null,
      password: '',
      cPassword:''
    }
   }

  ngOnInit(): void {
  }

  userIdAvailable() {

  }

  signup()
  {
    let user: ICustomer = {
      userId: this.signupForms.userId,
      name: this.signupForms.userName,
      contactNumber: this.signupForms.contactNumber,
      password: this.signupForms.password,
      role:"user"
    };
    console.log("We are sending the below object to rest api.");
    this.cs.signup(user).subscribe(data => {
      console.log(data)
      if (data == true) {
        this.userTaken = false
        this.router.navigate(['/login'])
      }
      else
        this.userTaken = true;
    });
  }

  fnConfirmPassword(password :string , cPassword : string) {
    if (password === cPassword) {
      this.cPHasError = false;
    }
    else
      this.cPHasError = true;
    if (cPassword === '')
      this.cPHasError = true;
  }
}
