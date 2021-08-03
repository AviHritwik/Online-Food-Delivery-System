import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { FoodComponent } from './food/food.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyOrderDetailsComponent } from './my-order-details/my-order-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'order',component:OrderComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'admin-food',component:FoodComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'myorder', component: MyOrderComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'orderdetails/:id', component: MyOrderDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
