import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: []
})
export class AppModule { }






