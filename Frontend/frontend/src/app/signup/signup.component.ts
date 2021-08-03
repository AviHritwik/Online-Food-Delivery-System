import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  constructor(private fb:FormBuilder, private cs:CustomerService) {
    this.signupForm=this.fb.group({
      userId:[],
      userName: [],
      age:[],
      password:[],
      cPassword:[]
    });
   }

  ngOnInit(): void {
  }

  signup()
  {
    console.log(this.signupForm)
    let user: ICustomer = {
      userId: this.signupForm.controls['userId'].value,
      name: this.signupForm.controls['userName'].value,
      age: this.signupForm.controls['age'].value,
      password: this.signupForm.controls['password'].value,
      role:"user"
    };
    console.log("We are sending the below object to rest api.");
    console.log(user);
    this.cs.signup(user).subscribe(data=>console.log(data));
  }

}
