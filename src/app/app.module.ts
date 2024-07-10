import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FullCourseComponent } from './full-course/full-course.component';
import { FullCoursePageComponent } from './full-course-page/full-course-page.component';
import { ShortCourseComponent } from './short-course/short-course.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeachersComponent } from './teachers/teachers.component';
import { VideoComponent } from './video/video.component';
import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { AboutComponent } from './about/about.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MarketingComponent,
    FullCourseComponent,
    FullCoursePageComponent,
    ShortCourseComponent,
    CourseDetailsPageComponent,
    TestimonialsComponent,
    TeachersComponent,
    VideoComponent,
    NewsComponent,
    NewsPageComponent,
    AboutComponent,
    AboutPageComponent,
    ContactComponent,
    ContactUsPageComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
