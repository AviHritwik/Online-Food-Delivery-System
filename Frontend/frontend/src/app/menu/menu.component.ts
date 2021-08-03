
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {
  status: string = 'login';
  loggedIn: boolean = false;
  loggedOut: boolean = true;
  notAdmin: boolean = true;
  userName!: String;
  constructor(private cs: CustomerService, private router: Router) { }

  ngDoCheck(): void {
    this.cs.getStatus().subscribe(data=>{      
      if(localStorage.getItem("customer")==null)
      {
        //has not logged in
        this.status = "login";
        this.loggedIn = false;
        this.loggedOut = true;
        this.notAdmin = true;
        // console.log("data is null");
      }else
      {
        this.status = "logout";
        this.loggedIn = true;
        this.loggedOut = false;
        let str = localStorage.getItem('customer');
        this.notAdmin = true;
        if (str != null) {
          var customer: any | null = JSON.parse(str);
          this.userName = customer.name;
          if (customer.role == "admin")
            this.notAdmin = false;
        }
        // console.log("data is not not not null");
      }
    });
  }

  ngOnInit(): void {
  }

  brandClick() {
    if (this.notAdmin)
      this.router.navigate(['/home'])
    else
      return;
      
  }

}
