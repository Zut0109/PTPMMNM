<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovieRequest;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\DB;

class ViewerController extends Controller
{
    public function show(Request $request)
    {
        $movie =  new MovieResource(Movie::findOrFail($request->id));
        return inertia('Movies/Moviedetail', [
            'movie' => $movie,
        ]);
    }
    public function watch(Request $request)
    {
        $movie =  new MovieResource(Movie::findOrFail($request->id));
        auth()->user()->historyMovies()->toggle([$request->id]);
        $movielist =  MovieResource::collection(Movie::where('tag','=',$request->tag)->get());
        return inertia('Movies/Content', [
            'movie' => $movie,
            'movies' => $movielist,
        ]);
    }
    public function movielist(Request $request)
    {
        $movielist =  MovieResource::collection(Movie::where('type','=','Movie')->get());
        return inertia('Movies/MovieList', [
            'movies' => $movielist,
        ]);
    }
    public function animelist(Request $request)
    {
        $animelist =  MovieResource::collection(Movie::where('type','=','Anime')->get());
        return inertia('Movies/AnimeList', [
            'animes' => $animelist,
        ]);
    }
    public function favoritelist(Request $request)
    { 
        $movielist = new Movie;
        $id= (int)Auth::id();
        $movies = DB::select('select movie_id from favorite_movies where user_id = '.$id.'');
        $list = json_decode(json_encode($movies), true);
        $movielist =  Collect();
        foreach ($list as $item){
            $movie = Movie::where('id','=',$item)->get();
            $movielist = $movielist->push($movie);
        }
        $new = (object) $movielist;
        return inertia('Users/FavoriteList', [
            'movies' => $new,
        ]);
    }
    public function historylist(Request $request)
    {
        $movielist = new Movie;
        $id= (int)Auth::id();
        $movies = DB::select('select movie_id from history_movies where user_id_history = '.$id.'');
        $list = json_decode(json_encode($movies), true);
        $movielist =  Collect();
        foreach ($list as $item){
            $movie = Movie::where('id','=',$item)->get();
            $movielist = $movielist->push($movie);
        }
        $new = (object) $movielist;
        return inertia('Users/HistoryList', [
            'movies' => $new,
        ]);
    }
}
