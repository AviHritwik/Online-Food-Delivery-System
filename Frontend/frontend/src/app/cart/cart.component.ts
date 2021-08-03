import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ICart } from '../cart';
import { IOrder } from '../order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:ICart[] =[] ;
  customer:any;
  constructor(private cartService:CartService, private router : Router) { }

  total: number = 0;
  totalQuantity: number = 0;
  cartEmpty: boolean = true;
  cartNotEmpty: boolean = false;
  ngOnInit(): void {
    var c=localStorage.getItem("customer");
    if(c==null || c=='')
    {
      alert('You have not logged in....');
      this.router.navigate(["/", "login"]);
      return;
    }
    //logged in user....
    this.customer = JSON.parse(c);
    console.log(this.customer)
    
    this.cartService.getAllByUserId(this.customer.userId).subscribe((data) => {
      
      this.cartItems = data;
      console.log(this.cartItems);
      if (this.cartItems.length != 0) {
        this.cartEmpty = false;
        this.cartNotEmpty = true;
        this.fnCalTotal();
      }
     });
  }

  fnCalTotal() {
    this.total = 0;
    this.totalQuantity = 0;
    for (let cartItem of this.cartItems) {
      this.total = this.total + (cartItem.price * cartItem.quantity)
      this.totalQuantity = this.totalQuantity + cartItem.quantity
    }
  }

  fnRemove(cartId : number)
  {
    this.cartService.removeItem(cartId).subscribe((data) => {
      console.log(data);
      if (data == true) {
        this.cartItems.filter((cartItem: ICart) => cartItem.cartId == cartId).map((cartItem) => {
            cartItem.quantity--;
        });
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.quantity > 0)
      }
      this.fnCalTotal();
      if (this.cartItems.length == 0) {
        this.cartEmpty = true;
        this.cartNotEmpty = false;
      }
      })
  }

  fnEmptyCart() {
    this.cartService.emptyCart(this.customer.userId).subscribe((data) => {
      if (data == true) {
        this.cartItems = [];
        this.fnCalTotal();
        this.cartEmpty = true;
        this.cartNotEmpty = false;
      }
    })
  }

  fnAdd(cartId: number) {
    this.cartService.addItem(cartId).subscribe((data) => {
      if (data == true) {
        this.cartItems.filter((cartItem: ICart) => cartItem.cartId == cartId).map((cartItem) => {
          cartItem.quantity++;
        });
        this.fnCalTotal();
      }
    })
  }

  fnBuyNow = () => {
    let dishList: string[];
    let dishes: string;
    dishList = this.cartItems.map(cartItem => { return cartItem.dishName });
    dishes = dishList.toString();
    let d = new Date();
    console.log()
    let order: IOrder = {
      userId : this.customer.userId,
      dishes: dishes,
      price: this.total,
      orderDate : d.toDateString()
    }
    this.cartService.order(order).subscribe((data) => {
      console.log(data)
      if (data == true)
        this.fnEmptyCart()
        this.router.navigate(["/","myorder"])
    })
  }

}
