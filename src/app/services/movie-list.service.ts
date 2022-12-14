import { Injectable } from '@angular/core';
import {MovieItem} from "../interfaces/movie-item";
import {MovieListStorageService} from "./movie-list-storage.service";

const movieListStorageKey = 'Movie_List';

const defaultMovieList : MovieItem [] = [
  {
    title: 'Аватар',
    genre: 'Приключение',
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/300x450',
    favorite: false
  },
  {
    title: 'Джон Картер',
    genre: 'Фантастика',
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/76aec0f0-bc47-4715-9818-73d3687da49f/300x450',
    favorite: false
  },
  {
    title: 'Тор',
    genre: 'Фантастика',
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/8674c9c7-6ec6-4c90-8642-7b0741d87dac/300x450',
    favorite: false
  },
  {
    title: 'Хищник из бездны',
    genre: 'Ужасы',
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/3eedd304-f842-4444-a0c4-88da8aa914fa/300x450',
    favorite: false
  },
  {
    title: 'Начало',
    genre: 'Фантастика',
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/300x450',
    favorite: false
  },
  {
    title: 'Гладиатор',
    genre: 'Боевик',
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/7c3460dc-344d-433f-8220-f18d86c8397d/300x450',
    favorite: false
  },
]

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  movieList: MovieItem[];

  constructor(private MovieListStorageService: MovieListStorageService) {
    this.movieList =
      MovieListStorageService.getData(movieListStorageKey) || defaultMovieList;
  }

  saveList(): void {
    this.MovieListStorageService.setData(movieListStorageKey, this.movieList);
  }

  addItem(item: MovieItem): void {
    this.movieList.push(item);
    this.saveList();
  }

  updateItem(item: MovieItem, changes: MovieItem): void {
    console.log("Update")
    const index = this.movieList.indexOf(item);
    this.movieList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: MovieItem): void {
    const index = this.movieList.indexOf(item);
    this.movieList.splice(index, 1);
    this.saveList();
  }

  changeFavourite(item: MovieItem):void {
    const index = this.movieList.indexOf(item);
    this.movieList[index].favorite = !this.movieList[index].favorite ;
    this.saveList();
  }

  getMovieList(): MovieItem[] {
    return this.movieList;
  }
}
