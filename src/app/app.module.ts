import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car-list/car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StatusFormComponent } from './status-form/status-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent,
    CarFormComponent,
    UserFormComponent,
    StatusFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
