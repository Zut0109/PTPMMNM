import React from 'react'
import Viewer from '../Layouts/Viewer'
import { Link } from '@inertiajs/inertia-react';
import '/css/front-end.css';
import '/js/front-end.js';

export default function Index(props) {

  const {data: movies, links, meta} = props.movies; 

  return (
    <>
        <main>
    <article>
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <p class="hero-subtitle">Vioet Evargarder The Movie</p>
            <h1 class="h1 hero-title">
              Unlimited <strong>Movie</strong>, TVs Shows, & More.
            </h1>
            <div class="meta-wrapper">
              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 18</div>
                <div class="badge badge-outline">HD</div>
              </div>
              <div class="ganre-wrapper">
                <a href="#">Anime,</a>
                <a href="#">Movie</a>
              </div>
              <div class="date-time">
                <div>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <time datetime="2022">2022</time>
                </div>
                <div>
                  <ion-icon name="time-outline"></ion-icon>
                  <time datetime="PT128M">128 min</time>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section class="upcoming">
        <div class="container">

          <div class="flex-wrapper">
            <div class="title-wrapper">
              <h2 class="h2 section-title">Upcoming Movies</h2>
            </div>
            <ul class="filter-list">
              <li>
                <button class="filter-btn">Movies</button>
              </li>
              <li>
                <button class="filter-btn">TV Shows</button>
              </li>
              <li>
                <button class="filter-btn">Anime</button>
              </li>
            </ul>
          </div>

          <ul class="movies-list  has-scrollbar">

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
      <section class="service">
        <div class="container">

          <div class="service-banner">
            <figure>
              <img src="../storage/movies/4.jpg" alt="HD 4k resolution! only $3.99"/>
            </figure>

            <a href="../storage/movies/4.jpg" download class="service-btn">
              <span>Download</span>

              <ion-icon name="download-outline"></ion-icon>
            </a>
          </div>

          <div class="service-content">

            <p class="service-subtitle">Our Services</p>

            <h2 class="h2 service-title">Download Your Shows Watch Offline.</h2>

            <p class="service-text">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
              passages of lorem
              Ipsum available, but the majority have suffered alteration in some injected humour.
            </p>
          </div>

        </div>
      </section>




    </article>

      

  </main>
    </>
  )
}

Index.layout = (page) => <Viewer children={page} title={"Index"}/>
