import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { FoodService } from '../food.service';
import { IFood } from '../food';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  foods:any;
  constructor(private fs:FoodService, private os:OrderService, private cartService:CartService) { }

  loggedIn: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem("customer") != null)
      this.loggedIn = true
    this.fs.getAllFoods().subscribe((data)=>{
      this.foods = data;
      for (let food of this.foods) {
        food.img = "../../assets/images/" + food.dishName+".jpg"
      }
      console.log(this.foods)
    });
  }

  fnBuy(id:any)
  {
    alert(id);
    if(localStorage.getItem('customer')==null)
    {
      console.log("NOt logged in.")
      return;
    }
    var str:any;
    str=localStorage.getItem('customer');
    var customer=JSON.parse(str);
    var customer_id=customer.id;
    var order=new Order();
    order.orderDate=new Date();
    order.foodId=id;
    order.customerId=customer_id;
    order.quantity=1;
    console.log("Going to place an order as below");
    console.log(order);
    this.os.placeOrder(order).subscribe(data=>console.log(data));
  }

  fnAddToCart(f:any)
  {
    var str:any;
    str=localStorage.getItem('customer');
    var customer=JSON.parse(str);
    var customer_id = customer.userId;
    let food: IFood = {
      dishId: f.dishId,
      dishName : f.dishName,
      description: f.description,
      type : f.type,
      price : f.price
    };
    console.log(food)
    this.cartService.addToCart(customer_id,food).subscribe((data)=>{
      console.log(data);
    });
  }
}
