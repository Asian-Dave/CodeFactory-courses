import { Component, OnInit, model } from '@angular/core';
import { courses } from '../models/Courses';
import { ICourse } from '../models/courses-model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.css',
})
export class CourseDetailsPageComponent implements OnInit {
  id: number = 0;
  course: ICourse = {} as ICourse;
  courses: ICourse[] = courses;
  constructor(private route: ActivatedRoute, private CS: CartService) {}

  addToCart(course: ICourse) {
    this.CS.addToCart(this.course);
    console.log(this.CS.getCart());
  }

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      let index = res['x'];
      this.course = courses[index];
    });
  }
}
//
