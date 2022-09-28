<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $post = Post::query()->where('user_id', $user->id);
        return PostResource::collection(Post::where('user_id', $user->id)->paginate(50));
        return [
            'data' => $post,
            'user' => $user
        ];
    }
    public function showById(Post $post, Request $request)
    {
        // return new PostResource($post);
    }
}
