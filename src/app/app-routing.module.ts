import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCoursePageComponent } from './full-course-page/full-course-page.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: 'full-course-page',
    component: FullCoursePageComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'course-details-page',
    component: CourseDetailsPageComponent,
  },
  {
    path: 'news-page',
    component: NewsPageComponent,
  },
  {
    path: 'contact-us-page',
    component: ContactUsPageComponent,
  },
  {
    path: 'about-page',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
