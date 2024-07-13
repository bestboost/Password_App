import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  calculateStrength(password: string): string {
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'short';
    } else if (this.isStrong(password)) {
      return 'strong';
    } else if (this.isMedium(password)) {
      return 'medium';
    } else {
      return 'easy';
    }
  }

  private isStrong(password: string): boolean {
    return /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  }

  private isMedium(password: string): boolean {
    return ((/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) ||
            (/[a-zA-Z]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) ||
            (/[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)));
  }
}
