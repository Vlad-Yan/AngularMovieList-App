import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {MovieItem} from "../interfaces/movie-item";
import {MovieListService} from "../services/movie-list.service";


@Component({
  selector: 'app-home',
  templateUrl: './all-movies-page.component.html',
  styleUrls: ['./all-movies-page.component.scss']
})
export class AllMoviesPage implements OnInit{
  favorite = false;
  movieList!: MovieItem[];
  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.movieList = this.movieListService.getMovieList();
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
