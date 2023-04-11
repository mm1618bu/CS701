import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
