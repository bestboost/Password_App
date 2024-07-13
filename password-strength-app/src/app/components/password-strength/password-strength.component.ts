import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  @Input() password: string = '';
  strength: string = 'empty';
   


  calculateStrength() {
    if (this.password.length === 0) {
      this.strength = 'empty';
    } else if (this.password.length < 8) {
      this.strength = 'short';
    } else if (/^[a-zA-Z]+$/.test(this.password) || /^[0-9]+$/.test(this.password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.password)) {
      this.strength = 'easy';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password)) {
      this.strength = 'strong';
    } else if ((/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
               (/[a-zA-Z]/.test(this.password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password)) ||
               (/[0-9]/.test(this.password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password))) {
      this.strength = 'medium';
    }
  }
}

