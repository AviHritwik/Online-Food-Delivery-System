import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  str: any;
  failed: boolean = false;
  constructor(private fb:FormBuilder, private cs:CustomerService, private router:Router) { 
    this.loginForm=this.fb.group({
      id:[],
      password:[]
    });
  }

  ngOnInit(): void {
  }

  // fnAddProduct()
  // {
  //   var product=this.loginForm.value;
  //   alert(product.id);
  // }
  fnLogin()
  {    
    var id=this.loginForm.controls['id'].value;
    var pwd=this.loginForm.controls['password'].value;
    // alert(id+" : "+pwd);
    this.cs.findCustomerByIdPassword(id, pwd).subscribe(data=>{
      console.log(data);

      if(data!=null)
      {
        localStorage.setItem('customer',JSON.stringify(data));
        this.str=localStorage.getItem("customer");
        var customer=JSON.parse(this.str);
        alert(customer.role)
        
        if(customer.role=="user")
        {
          this.router.navigate(["/","order"]);
      
          
        }
        else{
          this.router.navigate(['/','admin-food']);
     
        }
      }
      else
      {
        localStorage.removeItem('customer');
        this.failed = true;
      }
      this.cs.getStatus();
    });
      
  }

}
