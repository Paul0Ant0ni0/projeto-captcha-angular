import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardCaptchaComponent } from './card-captcha/card-captcha.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCaptchaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
