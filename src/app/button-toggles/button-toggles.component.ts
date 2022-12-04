import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MovieItem} from "../interfaces/movie-item";

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.scss']
})
export class ButtonTogglesComponent {

  @Output() allMovies: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();
  @Output() favoriteMovies: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();

  constructor(private router: Router) {}

  goToAllMoviesPage() {
    this.router.navigate(['/']);
    this.allMovies.emit();
  }

  goToFavoriteMoviesPage() {
    this.router.navigate(['/favorite']);
    this.favoriteMovies.emit();
  }

}
