// app.component.ts
import { Component } from '@angular/core';
import { WorkspaceEstimateComponent } from './workspace/workspace-estimate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkspaceEstimateComponent], // Add this import
  template: `
    <app-workspace-estimate></app-workspace-estimate>
  `,
  styles: []
})
export class AppComponent {
  title = 'workspace-estimate';
}