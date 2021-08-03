import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string='http://localhost:8080/order';
  constructor(private http:HttpClient) { }

  placeOrder(order:any)
  {
    return this.http.post(this.url,order);
  }
  getAllOrder()
  {
    return this.http.get(this.url);
  }
  findOrderById(id: any)
  {
    return this.http.get(this.url+"/get/"+id);
  }
  findOrdersByCustomer(id:any)
  {
    return this.http.get(this.url+"/customer/"+id);
  }
  modifyOrder(order:any)
  {
    return this.http.put(this.url,order);
  }
  removeOrder(id:any)
  {
    return this.http.delete(this.url+'/'+id);
  }
}
