import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordStrengthComponent, CustomInputComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;
  title = 'password-strength-app';

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.form = new FormGroup({
      password: new FormControl('')
    });
    
    const passwordControl = this.form.get('password');
if (passwordControl) {
  passwordControl.valueChanges.subscribe(value => {
    this.onPasswordInput(value);
  });
}

  }

  onPasswordInput(value: string): void {
    // Додаткова перевірка, що value не є null
    if (value !== null) {
      this.passwordStrengthService.calculateStrength(value);
    }
  }
}
