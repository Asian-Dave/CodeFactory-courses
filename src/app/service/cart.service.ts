import { Injectable } from '@angular/core';
import { ICourse } from '../models/courses-model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ICourse[] = [];
  course: ICourse = {} as ICourse;
  constructor() {}

  addToCart(course: ICourse) {
    this.cart.push(course);
  }
  getCart() {
    return this.cart;
  }

  getTotal() {
    let total: number = 0;

    for (let course of this.cart) {
      total += course.fee;
    }
    return total;
  }

  getCartLength(): number {
    return this.cart.reduce((count) => count, 0);
  }

  removeFromCart(courseId: number): void {
    const courseInCart = this.cart.find((course) => course.id === courseId);
    if (courseInCart) {
      this.cart = this.cart.filter((course) => course.id !== courseId);
    }
  }

  clearCart(): void {
    this.cart = [];
  }
}
