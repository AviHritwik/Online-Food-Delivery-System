import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string='http://localhost:8080/user';
  constructor(private http:HttpClient) { }

  getStatus()
  {
    const myObservable=new Observable(observer=>{
      setTimeout(()=>{
        var customer=localStorage.getItem("customer");
        observer.next(customer);
      },100);
    });
    return myObservable;
  }

  getAllCustomers()
  {
    return this.http.get(this.url);
  }
  findCustomerByIdPassword(id:any, password:string)
  {
    const user = {
      userId: id,
      password: password
    }
    return this.http.post(this.url+"/login",user);
  }
  signup(customer: ICustomer)
  {
    return this.http.post(this.url+"/add",customer);
  }
  modifyCustomer(customer:any)
  {
    return this.http.put(this.url,customer);
  }
  removeCustomer(id:any)
  {
    return this.http.delete(this.url+"/"+id);
  }
}
