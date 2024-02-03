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
        'att_id',
        'member_id',
    ];

    public function attendance()
    {
        return $this->belongsTo(AttendanceModel::class,"att_id");
    }

    public function members()
    {
        return $this->hasMany(MemberModel::class,"id");
    }
}