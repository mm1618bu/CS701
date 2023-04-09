import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  price: number;
}

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  menu: MenuItem[] = [
    { name: 'Coffee', price: 2.99 },
    { name: 'Latte', price: 3.99 },
    { name: 'Muffin', price: 2.49 },
    { name: 'Bagel', price: 1.99 }
  ];

  orderItems: OrderItem[] = [];

  addItem(item: MenuItem) {
    const existingItem = this.orderItems.find(i => i.name === item.name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.orderItems.push({
        name: item.name,
        price: item.price,
        quantity: 1
      });
    }
  }

  removeItem(item: OrderItem) {
    const index = this.orderItems.indexOf(item);
    this.orderItems.splice(index, 1);
  }

  getTotal() {
    return this.orderItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  submitOrder() {
    // TODO: Implement submit order functionality
  }
}
