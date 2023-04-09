import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  orderItems = []; // empty array to store order items
  customerName = '';
  customerEmail = '';
  cardNumber = '';
  expirationDate = '';
  securityCode = '';

  // method to calculate total order price
  getTotal() {
    return this.orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // method to submit order to backend API
  submitOrder() {
    const orderData = {
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      items: this.orderItems,
      paymentInfo: {
        cardNumber: this.cardNumber,
        expirationDate: this.expirationDate,
        securityCode: this.securityCode
      }
    };

    // send orderData to backend API using HTTP service or other method
  }
}
