<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovieRequest;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;


class MovieController extends Controller
{
    public function index()
    {
        $movies = MovieResource::collection(Movie::latest()->paginate(10));
        return inertia('Movies/Index', [
            'movies' => $movies,
        ]);
    }

    public function store(MovieRequest $request)
    {
        $attr = $request->toArray();

        Movie::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Movie has been created',
        ]);
    }

    public function update(Request $request, Movie $movie)
    {
        $attr = $request->toArray();

        $movie->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Movie has been updated',
        ]);
    }

    public function destroy(Movie $movie)
    {
        $movie->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Movie has been deleted',
        ]);
    }
    public function favorite(Request $request)
    {
        auth()->user()->favoriteMovies()->toggle([$request->id]);
        return back()->with([
            'type' => 'success',
            'message' => 'You have successfully add this movie to favorite.',
        ]);
    }
    
}
