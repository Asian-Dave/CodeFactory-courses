import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCourseComponent } from './short-course.component';

describe('ShortCourseComponent', () => {
  let component: ShortCourseComponent;
  let fixture: ComponentFixture<ShortCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
