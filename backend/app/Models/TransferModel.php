<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransferModel extends Model
{
    use HasFactory;

    protected $table = "transfer";
    protected $fillable = [
        'status',
    ];
}