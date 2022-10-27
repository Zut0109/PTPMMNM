<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return inertia('Users/Profile');
    }
    public function viewerprofile(Request $request)
    {
        return inertia('Users/ViewerProfile');
    }

    public function upload(Request $request,User $user)
    {
        $user = $request->user();
        $user->avatar = $request->user()->id;
        $user->update();
        $file = $request->hasFile('avatarimg');
        if($file){
            $newfile = $request->file('avatarimg');
            $path = $request->file('avatarimg')->storeAs(
                'avatars',
                $request->user()->id.'.'.$newfile->getClientOriginalExtension(),
                'public'
            );
        }

        return back()
        ->with('success','You have successfully upload file.');
    }
}
