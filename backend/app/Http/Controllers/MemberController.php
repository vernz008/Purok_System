<?php

namespace App\Http\Controllers;

use App\Models\MemberModel;
use App\Http\Controllers\PurokController;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            // $member = MemberModel::with('organizations', 'puroks', 'groups')
            // ->join('organizations', 'organizations.id', '=', 'members.org_id')
            // ->join('purok', 'purok.id', '=', 'members.purok_id')
            //  ->join('groups', 'members.group_id', '=', 'groups.id')
            // ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
            //  'members.gender', 'members.birthday', 'members.address',
            //  'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
            // ->get();

            $members = MemberModel::query()
            ->select([
                'members.id',
                'members.firstname',
                'members.middlename',
                'members.lastname',
                'members.gender',
                'members.birthday',
                'organizations.kapisanan',
                'purok.purok',
                'groups.group',
                'members.address',
                'members.status',

                
            ])
            ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
            ->leftJoin('purok', 'purok.id', '=', 'members.purok_id')
            ->leftJoin('groups', 'groups.id', '=', 'members.group_id')
           
            ->get();

            if (count($members) > 0) {

                return response()->json($members, 200);

            }else {
                return response()->json(['message' => 'No member found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            //1. Validate
            $request->validate([
                'firstname' => "required",
                'middlename' => "required",
                'lastname' => "required",
                'gender' => "required",
                'birthday' => "required",
                'address' => "required",
                'org_id' => "required|numeric",
                'purok_id' => "required|numeric",
                'group_id' => "required|numeric",
                'status' => "required",
            ]);

            //2. Execute the Query
            $member = MemberModel::create([
                'firstname' => $request->firstname,
                'middlename' => $request->middlename,
                'lastname' => $request->lastname,
                'gender' => $request->gender,
                'birthday' => $request->birthday,
                'address' => $request->address,
                'org_id' => $request->org_id,
                'purok_id' => $request->purok_id,
                'group_id' => $request->group_id,
                'status' => $request->status,
            ]);

            //3. Process the Result
            if ($member) {
            //     $member_all = MemberModel::with('organizations', 'puroks', 'groups')
            // ->join('organizations', 'organizations.id', '=', 'members.org_id')
            // ->join('purok', 'purok.id', '=', 'members.purok_id')
            //  ->join('groups', 'members.group_id', '=', 'groups.id')
            // ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
            //  'members.gender', 'members.birthday', 'members.address',
            //  'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
            // ->get();

            $member_all = MemberModel::query()
            ->select([
                'members.id',
                'members.firstname',
                'members.middlename',
                'members.lastname',
                'members.gender',
                'members.birthday',
                'organizations.kapisanan',
                'purok.purok',
                'groups.group',
                'members.address',
                'members.status',
            ])
            ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
            ->leftJoin('purok', 'purok.id', '=', 'members.purok_id')
            ->leftJoin('groups', 'groups.id', '=', 'members.group_id')
            ->get();

                return response()->json($member_all, 201);
            }else {
                return response()->json(['message' => 'Failed to add data'], 500);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
           
            $member = MemberModel::query()
            ->select([
                'members.id',
                'members.firstname',
                'members.middlename',
                'members.lastname',
                'members.gender',
                'members.birthday',
                'organizations.kapisanan',
                'purok.purok',
                'groups.group',
                'members.address',
                'members.status',
            ])
            ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
            ->leftJoin('purok', 'purok.id', '=', 'members.purok_id')
            ->leftJoin('groups', 'groups.id', '=', 'members.group_id')
            ->find($id);

          

            if ($member) {
               
                return response()->json($member, 200);
            }else{
                return response()->json(['message' => 'Member Not Found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            //1. Validate
          $fields =  $request->validate([
            'firstname' => "required",
            'middlename' => "required",
            'lastname' => "required",
            'gender' => "required",
            'birthday' => "required",
            'address' => "required",
            'org_id' => "required|numeric",
            'purok_id' => "required|numeric",
            'group_id' => "required|numeric",
            'status' => "required",
           ]);

           //2. Execute the Query
           $member = MemberModel::find($id);

           //3. Process the Result
           if ($member) {
            $member->update([
            'firstname' => $fields["firstname"],
            'middlename' => $fields["middlename"],
            'lastname' => $fields["lastname"],
            'gender' => $fields["gender"],
            'birthday' => $fields["birthday"],
            'address' => $fields["address"],
            'org_id' => $fields["org_id"],
            'purok_id' => $fields["purok_id"],
            'group_id' => $fields["group_id"],
            'status' => $fields["status"],
        ]);

      

        $member_all = MemberModel::select([
            'members.id AS Member_Id',
            'attendance.id AS Attendance_Id',
            'records.id AS Record_Id',
            'records.att_id AS Record_Attendance_Id',
            'records.member_id AS Record_Member_Id',
            'attendance.pamagat AS Attendance_Title',
            'attendance.schedule AS Attendance_Date',
            'members.firstname AS Given_Name',
            'members.middlename AS Middle_Initials',
            'members.lastname AS Surname',
            'organizations.kapisanan AS Organization'
        ])
        ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
        ->leftJoin('records', 'records.member_id', '=', 'members.id')
        ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
        ->find($id);


            return response()->json($member_all ,200);
           }else {
               return response()->json(['message' => 'Failed to update data'], 500);
           }
   } catch (\Throwable $error) {
       throw $error;
   }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $member = MemberModel::find($id);

            if ($member) {
                
                $member->delete();

                $members = MemberModel::select([
                    'members.id AS Member_Id',
                    'attendance.id AS Attendance_Id',
                    'records.id AS Record_Id',
                    'records.att_id AS Record_Attendance_Id',
                    'records.member_id AS Record_Member_Id',
                    'attendance.pamagat AS Attendance_Title',
                    'attendance.schedule AS Attendance_Date',
                    'members.firstname AS Given_Name',
                    'members.middlename AS Middle_Initials',
                    'members.lastname AS Surname',
                    'organizations.kapisanan AS Organization'
                ])
                ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
                ->leftJoin('records', 'records.member_id', '=', 'members.id')
                ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
                ->get();

                return response()->json($members, 200);
            }else{
                return response()->json(['message'=>'Member not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    public function members_with_records()
    {
        try {

            $members = MemberModel::select([
                'members.id AS Member_Id',
                'attendance.id AS Attendance_Id',
                'records.id AS Record_Id',
                'records.att_id AS Record_Attendance_Id',
                'records.member_id AS Record_Member_Id',
                'attendance.pamagat AS Attendance_Title',
                'attendance.schedule AS Attendance_Date',
                'members.firstname AS Given_Name',
                'members.middlename AS Middle_Initials',
                'members.lastname AS Surname',
                'organizations.kapisanan AS Organization'
            ])
            ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
            ->leftJoin('records', 'records.member_id', '=', 'members.id')
            ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
            ->get();

            if (count($members) > 0) {

                return response()->json($members, 200);

            }else {
                
                return response()->json(['message' => 'No members found'], 404);

            }

        } catch (\Throwable $error) {

            throw $error;

        }
    }
}

/*

Need For Attendance List Module

- Members (Main TBL)
    id
    firstname
    middlename
    lastname
    org_id

- Organizations
    kapisanan

- Attendance
    id
    pamagat
    schedule
    

- Record
    id
    att_id
    member_id


Query from Database

SELECT 

members.id AS Member_Id, 
attendance.id AS Attendance_Id,
records.id AS Record_Id,

records.att_id,
records.member_id,

attendance.pamagat AS Attendance_Title,
attendance.schedule AS Attendance_Date,


members.firstname AS Given_Name, 
members.middlename AS Middle_Initials, 
members.lastname AS Surname,
organizations.kapisanan AS Organization

FROM members

LEFT JOIN organizations ON
organizations.id = members.org_id

LEFT JOIN records ON
records.member_id = members.id

LEFT JOIN attendance ON
attendance.id = records.att_id





Eloquent Query converted

$members = Member::select([
    'members.id AS Member_Id',
    'attendance.id AS Attendance_Id',
    'records.id AS Record_Id',
    'records.att_id AS Record_Attendance_Id',
    'records.member_id',
    'attendance.pamagat AS Attendance_Title',
    'attendance.schedule AS Attendance_Date',
    'members.firstname AS Given_Name',
    'members.middlename AS Middle_Initials',
    'members.lastname AS Surname',
    'organizations.kapisanan AS Organization'
])
->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
->leftJoin('records', 'records.member_id', '=', 'members.id')
->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
->get();



*/



/*


Convert this to Eloquent query

SELECT members.id AS member_id, members.firstname, members.middlename ,members.lastname, 
attendance.id AS attendance_id, attendance.pamagat, attendance.schedule,
records.att_id AS recordattendance_id,
organizations.kapisanan

FROM members 

LEFT JOIN records ON records.member_id = members.id
LEFT JOIN attendance ON attendance.id = records.att_id
LEFT JOIN organizations ON organizations.id = members.org_id









Need to fix logic when adding record on multiple attendance 
Need to remake the logic on the frontend where adding members to the Attendance
Need to Create Record and store them independently when adding member on multiple Attendance





*/