<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendanceModel extends Model
{
    use HasFactory;

    protected $table = "attendance";
    protected $fillable = [
        'userid',
        'pamagat',
       
    ];

    public function user()
    {
        return $this->belongsTo(User::class,"userid");
    }
}