import { Pipe, PipeTransform } from '@angular/core';
import {MovieItem} from "../interfaces/movie-item";

@Pipe({
  name: 'filterMoviesByFavorites',
  pure: false
})
export class FilterMoviesByFavoritesPipe implements PipeTransform {

  transform(movie: MovieItem[], favorite: boolean): MovieItem[] {
    if (favorite) {
      return movie.filter(movie => movie.favorite === true)
    } else {
      return movie;
    }
  }
}
