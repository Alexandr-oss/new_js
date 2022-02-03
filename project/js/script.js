/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const ad = document.querySelectorAll(".promo__adv img"),
    bg = document.querySelector(".promo__bg"),
    genre = bg.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector(".form.add"),
    addInput = addForm.querySelector(".adding_input"),
    checkbox = addForm.querySelector('[type= "checkbox"]');

  addForm.addEventListener("Submit", (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    const favorite = checkbox.chrcked;

    movieDB.movies.push(newFilm);
    movieDB.movies.sort();
  });

  ad.forEach((item) => {
    item.remove();
  });

  const edit = (item, i) => {
    item.textContent = "драма";
    i.style.backgroundImage = "url(img/bg.jpg)";
  };

  edit(genre, bg);

  movieDB.movies.sort();

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.movies.forEach((film, i) => {
      parent.innerHTML += `
  <li class="promo__interactive-item"> ${i + 1}. ${film}
  <div class="delete"></div>`;
    });
  }
});
