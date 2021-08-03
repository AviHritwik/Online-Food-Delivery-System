import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-order-details',
  templateUrl: './my-order-details.component.html',
  styleUrls: ['./my-order-details.component.css']
})
export class MyOrderDetailsComponent implements OnInit {

  order!: any;
  id!: number;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.orderService.findOrderById(this.id).subscribe((data) => {
      if (data) {
        this.order = data;
        let dishes = this.order.dishes.split(",")
        this.order.dishList = dishes
        console.log(this.order);
      }
    })
  }

}
