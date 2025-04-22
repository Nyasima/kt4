import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
    <button (click)="onClick()" class="submit-button">
      {{ text }}
    </button>
  `,
  styles: [`
    .submit-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .submit-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class CustomButtonComponent {
  @Input() text: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}