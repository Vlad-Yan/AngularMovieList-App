import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTogglesComponent } from './button-toggles.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    ButtonTogglesComponent
  ],
  exports: [
    ButtonTogglesComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ]
})
export class ButtonTogglesModule {

}
