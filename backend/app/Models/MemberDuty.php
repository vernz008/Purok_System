<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberDuty extends Model
{
    use HasFactory;

    protected $table = "memberduties";
    protected $fillable = [
        'tung_id',
        'member_id',
    ];
}