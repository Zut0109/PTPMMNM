import Viewer from '../../Layouts/Viewer'
import Dialog from '../../Components/Dashboard/Dialog';
import '/css/front-end.css';
import '/js/front-end.js';
import useDialog from '../../Hooks/useDialog';
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import FavoriteMovie from '../../Components/Dashboard/Users/FavoriteMovie';

export default function Moviedetail(props) {
  const [state, setState] = useState([]);
  const [UpdateDialogHandler, UpdateCloseTrigger,UpdateTrigger] = useDialog();
  const {data: movie, links, meta} = props.movie; 

  const openUpdateDialog = (movie) => {
    setState(movie);
    UpdateDialogHandler()
}
  return (
    
    <>
                <Dialog trigger={UpdateTrigger} title={`Add to favorite Movie: ${state.name}`}> 
                    <FavoriteMovie model={state} close={UpdateCloseTrigger}/>
                </Dialog>
        <article>
          <section class="movie-detail">
            <div class="container">
                <figure class="movie-detail-banner">
                        <img src={'/storage/movies/' + movie.id+ '.jpg'} alt="Free guy movie poster"/>
                              <button class="play-btn">
                                <ion-icon name="play-circle-outline"></ion-icon>
                              </button>
                </figure>
                <div class="movie-detail-content">
                  <h1 class="h1 detail-title">
                    <strong>{movie.name}</strong>
                  </h1>
                <div class="meta-wrapper">     
                  <div class="badge-wrapper">
                    <div class="badge badge-fill">PG 13</div>
                      <div class="badge badge-outline">HD</div>
                      </div>
                      <div class="ganre-wrapper">
                        <a href="#">{movie.tag}</a>
                      </div>
                      <div class="date-time">
                        <div>
                          <ion-icon name="calendar-outline"></ion-icon>
                          <time datetime="2021">{movie.date}</time>
                        </div>
                      <div>
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT115M">{movie.time}</time>
                      </div>
                    </div>
                  </div>
                <p class="storyline">
                  {movie.comment}
                </p>

              <div class="details-actions">
                <div class="title-wrapper">
                  <p class="title">Prime Video</p>
                  <p class="text">Streaming Channels</p>
                </div>
                <form mothod="get" action="watch">
                  <input type="hidden" name="id" value={movie.id}></input>
                  <input type="hidden" name="tag" value={movie.tag}></input>
                  <input type="submit" class="btn btn-primary mt-3" value="Watch now">
                  </input>
                </form>
                
            </div>
          <a download class="download-btn">
          <button type="button" onClick={() => openUpdateDialog(movie)} className="btn btn-primary">
                                                        Add to Favorite
                                                    </button>
          </a>
       </div> 
      </div>
    </section>
  </article>
</>
  )
}

Moviedetail.layout = (page) => <Viewer children={page} title={"Watch"}/>
