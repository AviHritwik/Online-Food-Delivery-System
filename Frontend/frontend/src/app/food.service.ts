import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFood } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url:string="http://localhost:8080/dish";
  
  constructor(private http:HttpClient) { }

  addFood(food:any)
  {
    return this.http.post(this.url+"/add",food);
  }
  getAllFoods()
  {
    return this.http.get(this.url+"/getAll");
  }
  findFoodById(id:any)
  {
    return this.http.get(this.url+"/"+id);
  }
  findFoodsByCategory(category:string)
  {
    return this.http.get(this.url+"/category/"+category);
  }
  getCategories()
  {
    return this.http.get(this.url+"/categories");
  }
  modifyFood(food: IFood)
  {
    return this.http.put(this.url + "/update/" + food.dishId, food);
  }
  removeFood(id:any)
  {
    return this.http.delete(this.url+"/delete/"+id);
  }
}
