import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogElementsExampleDialog} from './modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormModule} from "../form/form.module";



@NgModule({
  declarations: [
    DialogElementsExampleDialog
  ],
  exports: [
    DialogElementsExampleDialog
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormModule
  ]
})
export class ModalModule { }
