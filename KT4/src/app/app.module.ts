import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-ui/custom-input.component';
import { CustomButtonComponent } from './custom-ui/custom-button.component';
import { WorkspaceEstimateComponent } from './workspace/workspace-estimate.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomButtonComponent,
    WorkspaceEstimateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }