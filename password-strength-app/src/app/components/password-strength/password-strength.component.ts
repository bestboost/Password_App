import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnChanges{
  @Input() password: string = '';
  strength: string = 'empty';
   
 ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.calculateStrength(changes['password'].currentValue);
    }
  }

  calculateStrength(password: string) {
    if (password.length === 0) {
      this.strength = 'empty';
    } else if (password.length < 8) {
      this.strength = 'short';
    } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      this.strength = 'easy';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      this.strength = 'strong';
    } else if ((/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) ||
               (/[a-zA-Z]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) ||
               (/[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password))) {
      this.strength = 'medium';
    }
  }
}

