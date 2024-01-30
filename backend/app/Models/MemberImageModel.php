<?php

namespace App\Models;

use App\Models\MemberModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberImageModel extends Model
{
    use HasFactory;

    protected $table = "member_images";
    protected $fillable = [
        "member_id",
        "image_name",
        "image_path",
    ];

    public function member()
    {
        return $this->belongsTo(MemberModel::class, "user_id");
    }
}