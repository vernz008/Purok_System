<?php

namespace App\Models;

use App\Models\OrganizationModel;
use App\Models\PurokModel;
use App\Models\TransferModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberModel extends Model
{
    use HasFactory;

    protected $table = "members";
    protected $fillable = [
        'firstname',
        'middlename',
        'lastname',
        'gender',
        'birthday',
        'address',
        'orgid',
        'purokid',
        'status',
    ];

    public function organizations()
    {
        return $this->belongsTo(OrganizationModel::class,"orgid");
    }

    public function purok()
    {
        return $this->belongsTo(PurokModel::class,"purokid");
    }

}