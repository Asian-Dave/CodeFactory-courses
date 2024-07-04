import { Component } from '@angular/core';
import { courses } from '../models/Courses';
import { ICourse } from '../models/courses-model';

@Component({
  selector: 'app-full-course',
  templateUrl: './full-course.component.html',
  styleUrl: './full-course.component.css',
})
export class FullCourseComponent {
  courses: ICourse[];

  constructor() {
    this.courses = this.getFilteredCourses();
  }

  getFilteredCourses(): ICourse[] {
    const allowedIds = [0, 1, 2];
    return courses.filter((course) => allowedIds.includes(course.id));
  }
}
