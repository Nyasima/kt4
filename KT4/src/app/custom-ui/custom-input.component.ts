import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <div class="input-container">
      <label>{{ label }}</label>
      <input 
        [type]="type" 
        [placeholder]="placeholder"
        (input)="onInputChange($event)"
        [value]="value"
      >
    </div>
  `,
  styles: [`
    .input-container {
      margin-bottom: 15px;
    }
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
  `]
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}