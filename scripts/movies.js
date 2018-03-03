'use strict';

/* global $ */

var moviesApiUrl = 'http://localhost:8000/api/movies';

var clearMovies = function clearMovies() {
  return $('ul.peliculas li').remove();
};
var areMoviesEqual = function areMoviesEqual(m1, m2) {
  return m1.name.toUpperCase() === m2.name.toUpperCase();
};

var doesMovieExist = function doesMovieExist(m1, array) {
  var itDoes = false;
  array.forEach(function (m2) {
    if (areMoviesEqual(m1, m2)) {
      itDoes = true;
    }
  });
  return itDoes;
};

$.delete = function (url, callback) {
  return $.ajax({ url: url, type: 'DELETE', success: callback });
};

var getMovies = function getMovies(callback) {
  return $.get(moviesApiUrl, {}, callback);
};
var newMovie = function newMovie(movie, callback) {
  return $.post(moviesApiUrl, movie, callback);
};
var deleteMovie = function deleteMovie(id, callback) {
  return $.delete(moviesApiUrl + '/' + id, callback);
};

var createMovieIfItDoesntExist = function createMovieIfItDoesntExist(name, genre, callback) {
  var movie = { name: name, genre: genre };
  getMovies(function (movies) {
    if (!doesMovieExist(movie, movies)) {
      newMovie(movie, callback);
    }
  });
};

/* eslint-disable no-unused-vars */
var handleDeleteMovie = function handleDeleteMovie(target) {
  return deleteMovie(target.dataset.id, listMoviesInView);
};
/* eslint-enable no-unused-vars */

var listMoviesInView = function listMoviesInView() {
  clearMovies();
  getMovies(function (movies) {
    movies.forEach(function (movie) {
      $('ul.peliculas').append('\n        <li>\n          <span class="delete-movie" onclick="handleDeleteMovie(this)" data-id="' + movie.id + '">\u2A2F</span>\n          <span class="movie-title">' + movie.name + '</span>\n          <span class="movie-genre">' + movie.genre + '</span>\n        </li>\n      ');
    });
  });
};

var handleFormSubmit = function handleFormSubmit(event) {
  event.preventDefault();
  var name = $(event.target).find('#nombre').val();
  var genre = $(event.target).find('#genero').val();
  createMovieIfItDoesntExist(name, genre, listMoviesInView);
  return false;
};

$('#pelicula-form').submit(handleFormSubmit);
listMoviesInView();