import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieItem} from "../interfaces/movie-item";
import {DialogElementsExampleDialog} from "../modal/modal.component";
import {MovieListService} from "../services/movie-list.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})


export class MovieItemComponent implements OnInit {

  @Input() item: MovieItem;
  @Output() remove: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();
  @Output() update: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();
  @Output() favourite: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
  updateItem(item: MovieItem): void {
    this.update.emit(item);
  }

  changeFavourite(): void {
    this.favourite.emit(this.item);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      data: this.item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.updateItem(result);
      }
    })
  }
}
