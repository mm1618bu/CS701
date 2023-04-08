import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  total: number;
};

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartItems: CartItem[] = [];
  newItemName: string = '';
  newItemPrice: number = 0;
  newItemQuantity: number = 0;

  addItem() {
    if (this.newItemName && this.newItemPrice && this.newItemQuantity) {
      const newItem: CartItem = {
        name: this.newItemName,
        price: this.newItemPrice,
        quantity: this.newItemQuantity,
        total: this.newItemPrice * this.newItemQuantity,
      };
      this.cartItems.push(newItem);
      this.newItemName = '';
      this.newItemPrice = 0;
      this.newItemQuantity = 0;
    }
  }

  updateQuantity(item: CartItem) {
    item.total = item.price * item.quantity;
  }

  removeItem(item: CartItem) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  calculateGrandTotal() {
    let grandTotal = 0;
    for (const item of this.cartItems) {
      grandTotal += item.total;
    }
    return grandTotal;
  }
}

bootstrapApplication(AppComponent);
