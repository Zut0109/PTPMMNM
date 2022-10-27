<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileuploadController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('Users/Profile');
    }
    public function uploadAvatar(Request $request)
    {   
        dd($request->file('image'));
        return back();
    }
}
