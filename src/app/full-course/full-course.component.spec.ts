import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourseComponent } from './full-course.component';

describe('FullCourseComponent', () => {
  let component: FullCourseComponent;
  let fixture: ComponentFixture<FullCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
