import {Component, EventEmitter, Output} from '@angular/core'


@Component({
  selector: 'app-home',
  templateUrl: './all-movies-page.component.html',
  styleUrls: ['./all-movies-page.component.scss']
})
export class AllMoviesPage {
  favorite = false;
}
