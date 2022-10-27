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
        return inertia('Movies/MovieDetail');
    }
    public function upload(Request $request,Movie $movie)
    {
        $movieid = $request->movieid;
        $movie = movie::find($movieid);
        $movie->image = $movieid;
        $movie->update();
        $file = $request->hasFile('image');
        if($file){
            $newfile = $request->file('image');
            $path = $request->file('image')->storeAs(
                'movies',
                $request->movieid.'.'.$newfile->getClientOriginalExtension(),
                'public'
            );
        }

        return back()
        ->with('success','You have successfully upload file.');
    }
    
}
