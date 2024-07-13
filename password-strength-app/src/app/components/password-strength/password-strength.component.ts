import { Component, Input, OnChanges,  SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { regex } from '../../utils/regex';

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

   hasLetters = regex.letters.test(this.password);
   hasNumbers = regex.numbers.test(this.password);
   hasSymbols = regex.symbols.test(this.password);
   
 ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.calculateStrength(changes['password'].currentValue);
    }
  }

calculateStrength(password: string) {
  const hasLetters = regex.letters.test(password);
  const hasNumbers = regex.numbers.test(password);
  const hasSymbols = regex.symbols.test(password);

  if (password.length === 0) {
    this.strength = 'empty';
  } else if (password.length < 8) {
    this.strength = 'short';
  } else if (hasLetters && !hasNumbers && !hasSymbols || 
             !hasLetters && hasNumbers && !hasSymbols || 
             !hasLetters && !hasNumbers && hasSymbols) {
    this.strength = 'easy';
  } else if ((hasLetters && hasNumbers && !hasSymbols) || 
             (hasLetters && !hasNumbers && hasSymbols) || 
             (!hasLetters && hasNumbers && hasSymbols)) {
    this.strength = 'medium';
  } else if (hasLetters && hasNumbers && hasSymbols) {
    this.strength = 'strong';
  }
}

}

