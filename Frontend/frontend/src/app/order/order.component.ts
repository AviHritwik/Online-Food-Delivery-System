import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IOrder } from '../order';
import { OrderService } from '../order.service';
import { FoodService } from '../food.service';
import { IFood } from '../food';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  foods : any;
  filteredFood!:any;
  searchedFood!: any;
  search: string ="";
  filter: string = "All";
  searchEmpty: boolean = false;
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
      this.filteredFood = this.foods;
      this.searchedFood = this.foods;
    });
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

  fnSearch(filter: string, search: string) {
    search = search.toLowerCase();
    if (filter === "All")
      this.searchedFood = this.foods.filter((food: any) => {
        let foodTemp: IFood = {
          dishId: food.dishId,
          dishName: food.dishName,
          description: food.description,
          type: food.type,
          price: food.price
        };
        foodTemp.dishName = foodTemp.dishName.toLowerCase()
        return foodTemp.dishName.includes(search)
      })

    else
      this.searchedFood = this.foods.filter((food: any) => {
        let foodTemp: IFood = {
          dishId: food.dishId,
          dishName: food.dishName,
          description: food.description,
          type: food.type,
          price: food.price
        };
        foodTemp.dishName=foodTemp.dishName.toLowerCase()
        return food.type === filter && foodTemp.dishName.includes(search)
      })
    this.searchEmpty = (this.searchedFood.length == 0)
  }

  fnFilter(filter: string) {
    this.search = ""
    if (filter === "All")
      this.searchedFood = this.foods
    else
      this.searchedFood = this.foods.filter((food: any) => food.type === filter)
    this.searchEmpty = (this.searchedFood.length == 0)
  }
}

interface Food {
  description: string;
  dishId: number;
  dishName: string;
  img: string;
  price: string;
  type: string;
}
