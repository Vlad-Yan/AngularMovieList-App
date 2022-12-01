import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import {MovieItemModule} from "./movie-item/movie-item.module";
import {FormModule} from "./form/form.module";
import {MovieListService} from "./services/movie-list.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MovieItemModule,
    FormModule
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
