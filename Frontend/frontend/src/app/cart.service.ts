import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from './cart';
import { IOrder } from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string='http://localhost:8080/cart';
  constructor(private http:HttpClient) { }

  getAllByUserId(id: string): Observable<ICart[]>
  {
    return this.http.get<ICart[]>(this.url+"/getAllByUser/"+id);
  }

  addToCart(cid:any, food:any)
  {
    return this.http.post(this.url+"/addToCart/"+cid,food);
  }

  modifyCart(cart:any)
  {
    return this.http.put(this.url,cart);
  }

  removeItem(id:number)
  {
    return this.http.delete(this.url+"/removeItem/"+id);
  }

  addItem(id: number) {
    return this.http.get(this.url + "/addItem/" + id);
  }

  emptyCart(userId: string) {
    return this.http.delete(this.url + "/deleteAllByUser/" + userId)
  }

  order(order: IOrder) {
    return this.http.post("http://localhost:8080/order/add", order);
  }
}
