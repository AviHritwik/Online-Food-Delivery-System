import { Component, DoCheck, OnInit } from '@angular/core';
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
  userName!: String;
  constructor(private cs:CustomerService) { }

  ngDoCheck(): void {
    this.cs.getStatus().subscribe(data=>{      
      if(localStorage.getItem("customer")==null)
      {
        //has not logged in
        this.status = "login";
        this.loggedIn = false;
        this.loggedOut = true;
        // console.log("data is null");
      }else
      {
        this.status = "logout";
        this.loggedIn = true;
        this.loggedOut = false;
        let str = localStorage.getItem('customer');
       
        if (str != null) {
          var customer: any | null = JSON.parse(str);
          this.userName = customer.name;
        }
        // console.log("data is not not not null");
      }
    });
  }

  ngOnInit(): void {
  }

}
