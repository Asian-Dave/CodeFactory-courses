import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCoursePageComponent } from './full-course-page/full-course-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'full-course-page',
    component: FullCoursePageComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
