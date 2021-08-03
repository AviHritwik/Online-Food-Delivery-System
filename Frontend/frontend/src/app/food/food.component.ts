import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodForm:any;
  foods:any;
  categories:any;
  constructor(private fb:FormBuilder, private fs:FoodService) {
    this.foodForm=this.fb.group({
      id:[],
      name:[],
      category:[''],
      price:[],
      
    });
   }

  ngOnInit(): void {
    //get all categories from service
    this.fs.getCategories().subscribe((data)=>{
      console.log(data);
      this.categories=data;
    });
    //get all products from service
    this.fs.getAllFoods().subscribe((data)=>this.foods=data);
  }

  fnAdd(){
    var food=this.foodForm.value;
    console.log('sending the below object to rest api');
    console.log(food);
    this.fs.addFood(food).subscribe((data)=>{
      console.log(data);
    });
  }
  fnModify(){
    var food=this.foodForm.value;
    console.log('sending the below object to rest api');
    console.log(food);
    this.fs.modifyFood(food).subscribe((data)=>{
      console.log(data);
    });
  }
  fnRemove(){
    var id=this.foodForm.controls['id'].value;
    console.log("Removing food of id "+id);
    this.fs.removeFood(id).subscribe(data=>console.log(data));
  }
}
