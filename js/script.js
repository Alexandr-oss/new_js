"use sctrict";

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {
    a: "b",
  },
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?"),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
