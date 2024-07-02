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
        'Klausi has over 10 years of experience in teaching mathematics and computer science.',
    },
    {
      name: 'Anna Heisenberg',
      photo: './images/teachers/teacher-2.jpg',
      description:
        'Anna specializes in physics and has a passion for helping students understand complex concepts.',
    },
    {
      name: 'Max Schmit',
      photo: './images/teachers/teacher-3.jpg',
      description:
        'Max is an expert in chemistry and loves to create engaging and interactive lessons.',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
