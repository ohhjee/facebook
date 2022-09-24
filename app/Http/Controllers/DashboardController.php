<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Post $poster, Request $request)
    {
        $post = $poster->get();
        $user = $request->user();
        // return PostResource::collection(Post::where('user_id', $user->id)->paginate(50));
        return [
            'data' => $post,
            'user' => $user
        ];
    }
}
