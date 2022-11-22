import React from 'react'
import Viewer from '../../Layouts/Viewer'
import { Link } from '@inertiajs/inertia-react';
import '/css/front-end.css';
import '/js/front-end.js';

export default function MovieList(props) {

  const {data: movies, links, meta} = props.movies; 

  return (
    <>
        <main>
    <article>
      <section class="tv-series">
        <div class="container">
            <div class="title-wrapper">
              <h2 class="h3 section-title">List Movies</h2>
            </div>
          <ul class="movies-list">
          {movies.map((movie, index) => (
            <li>
              <div class="movie-card">
                <a>
                  <figure class="card-banner">
                    <img src={'/storage/movies/' + movie.id+ '.jpg'}
                      alt={movie.name}/>
                  </figure>
                </a>
                <div class="title-wrapper">
                  <a>
                    <h3 class="card-title">{movie.name}</h3>
                  </a>
                  <time datetime="2022">{movie.date}</time>
                </div>
                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>
                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT107M">{movie.time}</time>
                  </div>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <data>NR</data>
                  </div>
                </div>
                <form mothod="get" action="moviedetail">
                  <input type="hidden" name="id" value={movie.id}></input>
                  <input type="submit" class="btn btn-primary mt-3" value="View">
                  </input>
                </form>
              </div>
            </li>
          ))}
          </ul>

        </div>
      </section>
    </article>
  </main>
    </>
  )
}

MovieList.layout = (page) => <Viewer children={page} title={"MovieList"}/>
