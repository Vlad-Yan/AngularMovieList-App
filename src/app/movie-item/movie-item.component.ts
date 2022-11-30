import {Component, Input, OnInit} from '@angular/core';
import {MovieItem} from "../interfaces/movie-item";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})


export class MovieItemComponent implements OnInit {

  @Input() item: MovieItem;

  constructor() { }

  ngOnInit(): void {
  }

}
