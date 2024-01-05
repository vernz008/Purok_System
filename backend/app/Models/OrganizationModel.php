<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationModel extends Model
{
    use HasFactory;

    protected $table = "organizations";
    protected $fillable = [
        'kapisanan',
    ];
}