<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TungkulinModel extends Model
{
    use HasFactory;

    protected $table = "tungkulin";
    protected $fillable = [
        'tungkulin',
    ];
}