import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ModalModule } from '../modal/modal.module';


@NgModule({
  declarations: [
    MovieItemComponent
  ],
  exports: [
    MovieItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ModalModule
  ]
})
export class MovieItemModule { }
