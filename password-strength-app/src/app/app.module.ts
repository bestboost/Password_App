import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: []
})
export class AppModule { }






