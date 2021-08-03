import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFood } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  adding: boolean = false;
  foodForm: any;
  modifyForm: any;
  foods:any;
  categories:any;
  constructor(private fb:FormBuilder, private fs:FoodService) {
    this.foodForm=this.fb.group({
      dishName:[],
      type:[],
      price: [],
      description : []
    });
    this.modifyForm = this.fb.group({
      price: [],
      description: []
    });
   }

  ngOnInit(): void {
    //get all products from service
    this.fnGetAllFood()
  }

  fnGetAllFood() {
    this.fs.getAllFoods().subscribe((data) => {
      this.foods = data
      this.foods.forEach((food: any) => food.modifying = false)
    });
  }

  fnAdding() {
    this.adding = this.adding ? false :true;
  }

  fnAdd() {
    var food = this.foodForm.value;
    console.log('sending the below object to rest api');
    console.log(food);
    this.fs.addFood(food).subscribe((data) => {
      console.log(data);
      if (data == true) {
        this.fnGetAllFood();
        this.adding = false
      }
    });
  }
  
  fnModifying(dishId: number) {
    /*var food=this.foodForm.value;
    console.log('sending the below object to rest api');
    console.log(food);
    this.fs.modifyFood(food).subscribe((data)=>{
      console.log(data);
    });*/
    this.foods.filter((food: any) => food.dishId == dishId).forEach((food: any) => food.modifying = food.modifying? false : true)
  }
  fnRemove(id : number){
    console.log("Removing food of id "+id);
    this.fs.removeFood(id).subscribe(data => {
      console.log(data)
      if (data == true)
        this.foods = this.foods.filter((food: IFood) => food.dishId != id)
    });
  }

  fnModify(dish: IFood) {
    dish.price = this.modifyForm.controls['price'].value;
    dish.description = this.modifyForm.controls['description'].value;
    this.fs.modifyFood(dish).subscribe((data) => {
      console.log(data);
    })
  }
  /**
   * var id=this.loginForm.controls['id'].value;
    var pwd=this.loginForm.controls['password'].value;
    */
}
