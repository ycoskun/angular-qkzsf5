import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ValueSelectorDirectiveDirective } from './value-selector-directive.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MatTableModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, OverlayModule, PortalModule, MatButtonModule],
  declarations: [AppComponent, HelloComponent, ValueSelectorDirectiveDirective],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent]
})
export class AppModule { }