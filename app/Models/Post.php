<?php

namespace App\Models;

use App\Models\Like;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'body',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function likeBy(User $user)
    {
        return $this->like->contains('user_id', $user->id);
    }
    public function like()
    {
        return $this->hasMany(Like::class);
    }
}
