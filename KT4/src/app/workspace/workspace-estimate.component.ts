import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from '../custom-ui/custom-input.component';
import { CustomButtonComponent } from '../custom-ui/custom-button.component';

@Component({
  selector: 'app-workspace-estimate',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomInputComponent, CustomButtonComponent],
  templateUrl: './workspace-estimate.component.html',
  styleUrls: ['./workspace-estimate.component.css']
})
export class WorkspaceEstimateComponent  {
  formData = {
    name: '',
    phone: '',
    email: '',
    date: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}