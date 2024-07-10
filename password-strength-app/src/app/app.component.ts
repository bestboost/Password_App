import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-strength-app';
}
