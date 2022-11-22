<?php

namespace App\Http\Controllers;


use App\Http\Requests\MovieRequest;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $movies = MovieResource::collection(Movie::latest()->paginate(10));
        return inertia('Index', [
            'movies' => $movies,
        ]);
    }
}
