<?php

namespace App\Http\Resources;

use DateTime;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            // 'user_id' => $this->user_id,
            'body' => $this->body,
            'created_at' => (new DateTime($this->created_at))->format('Y:m:d  H:i:s'),
            'updated_at' => (new DateTime($this->updated_at))->format('Y:m:d  H:i:s'),
        ];
    }
}
