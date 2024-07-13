import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
  imports: [ReactiveFormsModule], // Включіть ReactiveFormsModule тут
  standalone: true
})
export class CustomInputComponent implements ControlValueAccessor {
  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: handle the disabled state
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement != null) {
      this.value = inputElement.value;
      this.onChange(this.value); // Виклик методу onChange
    }
  }
}
