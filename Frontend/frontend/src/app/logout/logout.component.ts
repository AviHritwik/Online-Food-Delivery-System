import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cs:CustomerService) { }

  ngOnInit(): void {
    localStorage.removeItem('customer');
    this.cs.getStatus().subscribe();
  }

}
