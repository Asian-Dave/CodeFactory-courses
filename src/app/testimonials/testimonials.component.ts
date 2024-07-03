import { Component, OnInit } from '@angular/core';

interface Testimonial {
  name: string;
  photo: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Sultan',
      photo: '/images/testimonials/testimonial-1.png',
      text: '"This course was amazing! It really helped me understand the fundamentals of Angular. Highly recommended!"',
    },
    {
      name: 'Alice Smith',
      photo: '/images/testimonials/testimonial-2.png',
      text: '"I loved this course! The instructor was clear and concise, and the material was very well-organized."',
    },
    {
      name: 'John Robot',
      photo: '/images/testimonials/testimonial-3.png',
      text: '"Great course! I learned so much and feel much more confident in my coding skills now."',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
