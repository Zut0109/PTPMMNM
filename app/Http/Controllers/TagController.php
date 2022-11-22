<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Resources\TagResource;
use App\Http\Requests\TagRequest;

class TagController extends Controller
{
    public function index()
    {
        $tags = TagResource::collection(Tag::latest()->paginate(10));
        return inertia('Tags/Index', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $attr = $request->toArray();

        Tag::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Tag has been created',
        ]);
    }

    public function update(Request $request, Tag $Tag)
    {
        $attr = $request->toArray();

        $Tag->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Tag has been updated',
        ]);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Tag has been deleted',
        ]);
    }
}
