<?php

namespace App\Models;

use App\Models\AttendanceModel;
use App\Models\MemberModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecordModel extends Model
{
    use HasFactory;

    protected $table = "records";
    protected $fillable = [
        'attid',
        'memberid',
    ];

    public function attendance()
    {
        return $this->belongsTo(AttendanceModel::class,"product_id");
    }

    public function member()
    {
        return $this->hasMany(MemberModel::class);
    }
}