import {Component} from '@angular/core'


@Component({
  selector: 'app-home',
  templateUrl: './favorite-movies-page.component.html',
  styleUrls: ['./favorite-movies-page.component.scss']
})
export class FavoriteMoviesPage {
  favorite = true;
}
