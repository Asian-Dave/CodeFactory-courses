import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCoursePageComponent } from './full-course-page.component';

describe('FullCoursePageComponent', () => {
  let component: FullCoursePageComponent;
  let fixture: ComponentFixture<FullCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullCoursePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
