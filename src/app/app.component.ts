import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieItem} from "./interfaces/movie-item";
import { MovieListService } from './services/movie-list.service';
import {MatDialog} from "@angular/material/dialog";
import {DialogElementsExampleDialog} from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Список дел';

  movieList!: MovieItem[];

  constructor(private movieListService: MovieListService, public dialog: MatDialog) { }

  addItem(movie: MovieItem): void {
    this.movieListService.addItem(movie)
  }

  ngOnInit() {
    this.movieList = this.movieListService.getTodoList();
  }

  removeItem(item: MovieItem): void {
    this.movieListService.deleteItem(item);
  }

  updateItem(item: MovieItem, changes: MovieItem): void {
    this.movieListService.updateItem(item, changes);
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.addItem(result);
      }
    })
  }

  changeFavourite(item: MovieItem): void {
    this.movieListService.changeFavourite(item);
  }
}
