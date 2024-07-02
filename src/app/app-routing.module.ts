import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCoursePageComponent } from './full-course-page/full-course-page.component';

const routes: Routes = [
  {
    path: 'full-course-page',
    component: FullCoursePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
