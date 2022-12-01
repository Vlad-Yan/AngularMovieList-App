import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


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
    MatButtonModule
  ]
})
export class MovieItemModule { }
