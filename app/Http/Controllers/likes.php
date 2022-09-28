<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class likes extends Controller
{
    public function index(Post $post, Request $request)
    {
        if ($post->likeBy($request->user())) {
            return response(null, 409);
        }
        $post->like()->create([
            'user_id' => $request->user()->id
        ]);
    }
}
