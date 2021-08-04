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
  foodForms: any;
  modifyForm: any;
  foods:any;
  constructor(private fb:FormBuilder, private fs:FoodService) {
    this.foodForms = {
      dishName: '',
      type: '',
      price : null,
      description : ''
    }
    /*this.modifyForm = this.fb.group({
      price: [],
      description: []
    });*/
    this.modifyForm = {
      description: '',
      price :null
    }
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
    var food = this.foodForms;
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
    this.foods.forEach((food: any) => {
      if (food.dishId == dishId) {
        food.modifying = food.modifying ? false : true
        this.modifyForm.description = food.description
        this.modifyForm.price=food.price
      }
      else
        food.modifying=false
    })
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
    console.log(this.modifyForm)
    dish.price = this.modifyForm.price;
    dish.description = this.modifyForm.description;
    this.fs.modifyFood(dish).subscribe((data) => {
      console.log(data);
    })
  }
}
