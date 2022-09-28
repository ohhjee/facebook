<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return PostResource::collection(Post::where('user_id', $user->id)->paginate(50));
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        // $data = $request->validated();
        $result = Post::create($request->validated());
        return new PostResource($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $post->user_id) {
            return abort(403, 'Unauthorized action');
        }

        return new PostResource($post);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showById(Post $post, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $post->user_id) {
            return abort(403, 'Unauthorized action');
        }

        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $post->update($request->validated());
        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $post->user_id) {
            return abort(403, 'Unauthorized action');
        }
        $post->delete();
        return response('', 204);
    }
}
