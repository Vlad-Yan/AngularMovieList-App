import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieItem} from "./interfaces/movie-item";
import { MovieListService } from './services/movie-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Список дел';

  movieList: MovieItem[];

  constructor(private movieListService: MovieListService) { }

  addItem(movie: MovieItem): void {
    // this.movieList.push(movie);
    this.movieListService.addItem(movie)
  }

  ngOnInit() {
    this.movieList = this.movieListService.getTodoList();
  }
}
