import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component} from '@angular/core';

import { Home, Resume, Bio, Skills, Experience, Contact } from './home';


@NgModule({
  declarations: [
    Home, Resume, Bio, Skills, Experience, Contact
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Home, Resume, Bio, Skills, Experience, Contact]
})
export class HomeModule { }
