<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\MovieRequest;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\UploadedFile;

class MovieDetailController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $movie =  new MovieResource(Movie::findOrFail($request->id));
        return inertia('Movies/Profile', [
            'movie' => $movie,
        ]);
    }
    public function show(Request $request)
    {
        $movie =  new MovieResource(Movie::findOrFail($request->id));
        return inertia('Movies/Profile', [
            'movie' => $movie,
        ]);
    }
    public function upload(Request $request)
    {
        $movieid = $request->id;
        $movie = movie::find($movieid);
        $movie->image = $movieid;
        $movie->update();
        $file = $request->hasFile('image');
        if($file){
            $newfile = $request->file('image');
            $path = $request->file('image')->storeAs(
                'movies',
                $request->id.'.'.$newfile->getClientOriginalExtension(),
                'public'
            );
        }
        return back()
        ->with('success','You have successfully upload file.');
    }
    public function uploadvideo(Request $request)
    {
        $movieid = $request->id;
        $movie = movie::find($movieid);
        $movie->image = $movieid;
        $movie->update();
        $file = $request->hasFile('video');
        if($file){
            $newfile = $request->file('video');
            $path = $request->file('video')->storeAs(
                'videos',
                $request->id.'.'.$newfile->getClientOriginalExtension(),
                'public'
            );
        }
        return back()
        ->with('success','You have successfully upload file.');
    }
    
}
