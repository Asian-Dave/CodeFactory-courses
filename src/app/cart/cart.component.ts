import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ICourse } from '../models/courses-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  courses: ICourse[] = [];
  total: number = 0;
  originalTotal: number = 0;
  discountedTotal: number = 0;
  showDiscount: boolean = false;

  constructor(private CS: CartService) {}

  ngOnInit(): void {
    this.updateCart();
    this.calculateTotal();
  }

  removeFromCart(courseId: number): void {
    this.CS.removeFromCart(courseId);
    this.updateCart();
    this.calculateTotal();
  }

  clearCart(): void {
    this.CS.clearCart();
    this.updateCart();
    this.calculateTotal();
  }

  private updateCart(): void {
    this.courses = this.CS.getCart();
  }

  private calculateTotal(): void {
    this.originalTotal = this.CS.getTotal();
    this.total = this.originalTotal * 1.1;

    if (this.originalTotal > 500) {
      this.discountedTotal = this.total * 0.75;
      this.showDiscount = true;
    } else {
      this.discountedTotal = this.total;
      this.showDiscount = false;
    }
  }
}
