import { Component, OnInit } from '@angular/core';

interface Teacher {
  name: string;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css',
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [
    {
      name: 'Klausi Reiden',
      photo: './images/teachers/teacher-1.jpg',
      description:
        'Klausi is an exceptional coding instructor. His ability to break down complex programming concepts into easy-to-understand lessons has greatly enhanced our course development.',
    },
    {
      name: 'Anna Heisenberg',
      photo: './images/teachers/teacher-2.jpg',
      description:
        'Anna is a phenomenal web design teacher. Her eye for design and deep understanding of user experience have transformed the way I approach web projects.',
    },
    {
      name: 'Max Schmit',
      photo: './images/teachers/teacher-3.jpg',
      description:
        'Max  expertise in both coding and web design is unparalleled. He seamlessly integrates both disciplines in his teaching, providing a holistic approach to building modern web applications.',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
