import { Component } from '@angular/core';
import { ICourse } from '../models/courses-model';
import { courses } from '../models/Courses';

@Component({
  selector: 'app-short-course',
  templateUrl: './short-course.component.html',
  styleUrls: ['./short-course.component.css'],
})
export class ShortCourseComponent {
  courses: ICourse[];

  constructor() {
    this.courses = this.getFilteredCourses();
  }

  getFilteredCourses(): ICourse[] {
    const allowedIds = [3, 4, 5, 6];
    return courses.filter((course) => allowedIds.includes(course.id));
  }
}
