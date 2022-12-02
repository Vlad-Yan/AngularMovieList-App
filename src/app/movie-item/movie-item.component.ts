import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieItem} from "../interfaces/movie-item";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})


export class MovieItemComponent implements OnInit {

  @Input() item: MovieItem;
  @Output() remove: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();
  @Output() favourite: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  changeFavourite(): void {
    this.favourite.emit(this.item);
  }
}
