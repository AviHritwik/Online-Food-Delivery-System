import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from '../order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  order!: IOrder;
  dishList!: string[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let temp = localStorage.getItem('order');
    if (temp != null) {
      this.order = JSON.parse(temp);
      this.dishList = this.order.dishes.split(",")
      localStorage.removeItem('order')
    }
    else
      this.router.navigate(['/', 'home'])
  }

}
