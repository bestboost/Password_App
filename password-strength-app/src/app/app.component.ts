import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PasswordStrengthComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-strength-app';
    password: string = '';
  strength: string = 'empty';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  onPasswordInput(value: string): void {
    this.password = value;
    this.strength = this.passwordStrengthService.calculateStrength(this.password);
  }
}


