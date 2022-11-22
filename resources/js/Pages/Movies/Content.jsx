import React from 'react'
import Viewer from '../../Layouts/Viewer'
import { Link } from '@inertiajs/inertia-react';

export default function Content(props) {

  const {data: movie, links, meta} = props.movie; 
  const {data: movies,} = props.movies; 

  return (
    <>
        <article>
          <section class="movie-detail">
            <div class="container">
                <div class="movie-detail-content">
                  <p class="h3 detail-title">
                  {movie.name}
                  </p>
                </div> 
            </div>
            <video class="container float-left" controls>
              <source  src={'/storage/videos/' + movie.id+ '.mp4' } type="video/mp4" />
            </video> 
            <div class="flex-wrapper">
            <div class="title-wrapper">
              <h2 class="h2 section-title">Related Movies</h2>
            </div>
            <ul class="movies-list  has-scrollbar">
          {movies.map((one, index) => (
            <li>
              <div class="movie-card">
                <a>
                  <figure class="card-banner">
                    <img src={'/storage/movies/' + one.id+ '.jpg'}
                      alt={one.name}/>
                  </figure>
                </a>
                <div class="title-wrapper">
                  <a>
                    <h3 class="card-title">{one.name}</h3>
                  </a>
                  <time datetime="2022">{one.date}</time>
                </div>
                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>
                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT107M">{one.time}</time>
                  </div>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <data>NR</data>
                  </div>
                </div>
                <form mothod="get" action="moviedetail">
                  <input type="hidden" name="id" value={one.id}></input>
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
    </>
  )
}

Content.layout = (page) => <Viewer children={page} title={"Watch"}/>
