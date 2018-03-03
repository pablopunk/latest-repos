/* global $ */

const moviesApiUrl = 'http://localhost:8000/api/movies'

const clearMovies = () => $('ul.peliculas li').remove()
const areMoviesEqual = (m1, m2) => m1.name.toUpperCase() === m2.name.toUpperCase()

const doesMovieExist = (m1, array) => {
  let itDoes = false
  array.forEach(m2 => {
    if (areMoviesEqual(m1, m2)) {
      itDoes = true
    }
  })
  return itDoes
}

$.delete = (url, callback) => $.ajax({url: url, type: 'DELETE', success: callback})

const getMovies = callback => $.get(moviesApiUrl, {}, callback)
const newMovie = (movie, callback) => $.post(moviesApiUrl, movie, callback)
const deleteMovie = (id, callback) => $.delete(`${moviesApiUrl}/${id}`, callback)

const createMovieIfItDoesntExist = (name, genre, callback) => {
  const movie = {name, genre}
  getMovies(movies => {
    if (!doesMovieExist(movie, movies)) {
      newMovie(movie, callback)
    }
  })
}

/* eslint-disable no-unused-vars */
const handleDeleteMovie = target => deleteMovie(target.dataset.id, listMoviesInView)
/* eslint-enable no-unused-vars */

const listMoviesInView = () => {
  clearMovies()
  getMovies(movies => {
    movies.forEach(movie => {
      $('ul.peliculas').append(`
        <li>
          <span class="delete-movie" onclick="handleDeleteMovie(this)" data-id="${movie.id}">⨯</span>
          <span class="movie-title">${movie.name}</span>
          <span class="movie-genre">${movie.genre}</span>
        </li>
      `)
    })
  })
}

const handleFormSubmit = event => {
  event.preventDefault()
  const name = $(event.target).find('#nombre').val()
  const genre = $(event.target).find('#genero').val()
  createMovieIfItDoesntExist(name, genre, listMoviesInView)
  return false
}

$('#pelicula-form').submit(handleFormSubmit)
listMoviesInView()
