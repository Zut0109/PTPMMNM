import React from 'react'
import Viewer from '../../Layouts/Viewer'
import { Link } from '@inertiajs/inertia-react';
import '/css/front-end.css';
import '/js/front-end.js';

export default function AnimeList(props) {

  const {data: animes, links, meta} = props.animes; 

  return (
    <>
        <main>
    <article>
      <section class="tv-series">
        <div class="container" style={{marginBlock: "20px"}}>
            <div class="title-wrapper">
              <h2 class="h3 section-title">Anime list</h2>
            </div>
          <ul class="movies-list" >
          {animes.map((anime, index) => (
            <li>
              <div class="movie-card">
                <a>
                  <figure class="card-banner">
                    <img src={'/storage/movies/' + anime.id+ '.jpg'}
                      alt={anime.name}/>
                  </figure>
                </a>
                <div class="title-wrapper">
                  <a>
                    <h3 class="card-title">{anime.name}</h3>
                  </a>
                  <time datetime="2022">{anime.date}</time>
                </div>
                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>
                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT107M">{anime.time}</time>
                  </div>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <data>NR</data>
                  </div>
                </div>
                <form mothod="get" action="moviedetail">
                  <input type="hidden" name="id" value={anime.id}></input>
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

AnimeList.layout = (page) => <Viewer children={page} title={"Anime List"}/>
