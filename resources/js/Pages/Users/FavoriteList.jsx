import { useForm, usePage } from '@inertiajs/inertia-react';
import Viewer from '../../Layouts/Viewer'
import React, { useState } from "react";

export default function FavoriteList(props) {

    const movies = props.movies;
    console.log(movies);
  return (
    <>
        <main>
    <article>
      <section class="tv-series">
        <div class="container">
            <div class="title-wrapper">
              <h2 class="h3 section-title">Your Favorite List</h2>
            </div>
          <ul class="movies-list ">
          {movies.map((movie, index) => (
            movie.map((item, index) => (
            <li>
              <div class="movie-card">
                <a>
                  <figure class="card-banner">
                    <img src={'/storage/movies/' + item.id + '.jpg'}
                      alt={movie.name}/>
                  </figure>
                </a>
                <div class="title-wrapper">
                  <a>
                    <h3 class="card-title"> {item.name}</h3>
                  </a>
                  <time datetime="2022">{item.date}</time>
                </div>
                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>
                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT107M">{item.time}</time>
                  </div>
                  <div class="rating">
                    <ion-icon name="star"></ion-icon>
                    <data>NR</data>
                  </div>
                </div>
                <form mothod="get" action="moviedetail">
                  <input type="hidden" name="id" value={item.id}></input>
                  <input type="submit" class="btn btn-primary mt-3" value="View">
                  </input>
                </form>
              </div>
            </li>
            ))))};
          </ul>

        </div>
      </section>
    </article>
  </main>
    </>
  )
}

FavoriteList.layout = (page) => <Viewer children={page} title={"Favorite List"}/>

