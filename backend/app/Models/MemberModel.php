<?php

namespace App\Models;

use App\Models\OrganizationModel;
use App\Models\PurokModel;
use App\Models\TransferModel;
use App\Models\GroupModel;
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
        'org_id',
        'purok_id',
        'group_id',
        'status',
    ];

    public function organizations()
    {
        return $this->belongsTo(OrganizationModel::class,"org_id");
    }

    public function puroks()
    {
        return $this->belongsTo(PurokModel::class,"purok_id");
    }

    public function groups()
    {
        return $this->belongsTo(GroupModel::class,"group_id");
    }

}