import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AboutComponent } from './home/about/about.component';
import { ServicesComponent } from './home/services/services.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './core/constants/material.module';
import { CommonModule } from '@angular/common';
import { PreventiveNephrologyComponent } from './components/consultsus/preventive-nephrology/preventive-nephrology.component';
import { AcuteKidneyFailureComponent } from './components/consultsus/acute-kidney-failure/acute-kidney-failure.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeadingComponent } from './components/heading/heading.component';
import { BaseImageComponent } from './components/base-image/base-image.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    AboutComponent,
    ServicesComponent,
    ReviewsComponent,
    ContactComponent,
    HomeComponent,
    PreventiveNephrologyComponent,
    AcuteKidneyFailureComponent,
    AboutUsComponent,
    HeadingComponent,
    BaseImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
