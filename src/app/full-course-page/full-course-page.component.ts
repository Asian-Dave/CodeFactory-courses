import { Component } from '@angular/core';
import { courses } from '../models/Courses';
import { ICourse } from '../models/courses-model';

@Component({
  selector: 'app-full-course-page',
  templateUrl: './full-course-page.component.html',
  styleUrl: './full-course-page.component.css',
})
export class FullCoursePageComponent {
  courses: ICourse[];

  constructor() {
    this.courses = courses;
  }
}
