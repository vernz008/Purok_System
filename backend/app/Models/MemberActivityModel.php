<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberActivityModel extends Model
{
    use HasFactory;

    protected $table = "memberactivity";
    protected $fillable = [
        'memberid',
        'actid',
        'notes',
    ];
}