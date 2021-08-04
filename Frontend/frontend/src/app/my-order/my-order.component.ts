import { Component, OnInit } from '@angular/core';
import { MyorderService } from '../myorder.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orders: any;
  constructor(private orderService: MyorderService) { }

  ngOnInit(): void {
    this.orderService.getByUser().subscribe((data) => {
      this.orders = data;
      this.orders=this.orders.slice().reverse()
      for (let order of this.orders) {
        let dishes = order.dishes.split(",")
        order.dishList = dishes
        console.log(order.dishList)
      }
    });
  }

}
