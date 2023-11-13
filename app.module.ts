import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoursesComponent } from './courses/courses.component';
import { RatingComponent } from './rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task3Component } from './task3/task3.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { Task4Component } from './task4/task4.component';
import { Tassk4Component } from './tassk4/tassk4.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavbarComponent,
    SidebarComponent,
    CoursesComponent,
    RatingComponent,
    Task3Component,
    FormComponent,
    FooterComponent,
    Task4Component,
    Tassk4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
