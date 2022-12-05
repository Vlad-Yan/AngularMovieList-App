import {Component, DoCheck, OnInit} from '@angular/core'
import {MovieItem} from "../interfaces/movie-item";
import { MovieListService } from '../services/movie-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './favorite-movies-page.component.html',
  styleUrls: ['./favorite-movies-page.component.scss']
})
export class FavoriteMoviesPage implements DoCheck{
  favorite = true;
  movieList!: MovieItem[];
  constructor(private movieListService: MovieListService) { }

  ngDoCheck() {
    this.movieList = this.movieListService.getMovieList().filter(movie => movie.favorite === true);
  }


  removeItem(item: MovieItem): void {
    this.movieListService.deleteItem(item);
  }

  updateItem(item: MovieItem, changes: MovieItem): void {
    this.movieListService.updateItem(item, changes);
  }

  changeFavourite(item: MovieItem): void {
    this.movieListService.changeFavourite(item);
  }

}
