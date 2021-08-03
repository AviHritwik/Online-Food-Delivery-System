import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
      id:[],
      firstName:[],
      lastName:[],
      password:[],
      cpassword:[]
    });
   }

  ngOnInit(): void {
  }

  signup()
  {
    var customer=this.signupForm.value;
    console.log("We are sending the below object to rest api.");
    console.log(customer);
    this.cs.signup(customer).subscribe(data=>console.log(data));
  }

}
