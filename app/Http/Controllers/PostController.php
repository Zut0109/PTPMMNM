<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('id', 'desc')->get();

        return response()->json($posts, 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $post = Post::create($data);

        return response()->json($post, 200);
    }

    public function show(Post $post)
    {
        return response()->json($post, 200);
    }

    public function update(Request $request, Post $post)
    {
        $data = $request->all();
        $post->update($data);

        return response()->json($post, 200);
    }

    public function delete(Post $post)
    {
        $post->delete();
        $posts = Post::orderBy('id', 'desc')->get();

        return response()->json($posts, 200);
    }
}
