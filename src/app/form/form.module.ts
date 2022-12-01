import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class FormModule { }
