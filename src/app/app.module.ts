import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import {MovieItemModule} from "./movie-item/movie-item.module";
import {FormModule} from "./form/form.module";
import {MovieListService} from "./services/movie-list.service";
import { ModalModule } from './modal/modal.module';
import {ButtonTogglesModule} from "./button-toggles/button-toggles.module";
import {AppRoutingModule} from "./app-routing.module";
import {AllMoviesPage} from "./all-movies-page/all-movies-page.component";
import {FavoriteMoviesPage} from "./favorite-movies-page/favorite-movies-page.component";
import { FilterMoviesByFavoritesPipe } from './pipes/filter-movies-by-favorites.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AllMoviesPage,
    FavoriteMoviesPage,
    FilterMoviesByFavoritesPipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MovieItemModule,
    FormModule,
    ModalModule,
    ButtonTogglesModule,
    AppRoutingModule
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
