<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurokModel extends Model
{
    use HasFactory;

    protected $table = "purok";
    protected $fillable = [
        'purok',
        'group',
    ];
}