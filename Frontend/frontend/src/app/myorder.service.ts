import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  userId!: string;
  url: string = 'http://localhost:8080/order';
  constructor(private http: HttpClient) { }

  getByUser() {
    let str = localStorage.getItem('customer');

    if (str != null) {
      var customer: any | null = JSON.parse(str);
      this.userId = customer.userId;
    }
    return this.http.get(this.url + "/getByUser/" + this.userId);
  }
}
