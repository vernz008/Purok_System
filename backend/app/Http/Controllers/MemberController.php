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
            $member = MemberModel::with('organizations', 'puroks', 'groups')
            ->join('organizations', 'organizations.id', '=', 'members.org_id')
            ->join('purok', 'purok.id', '=', 'members.purok_id')
             ->join('groups', 'members.group_id', '=', 'groups.id')
            ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
             'members.gender', 'members.birthday', 'members.address',
             'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
            ->get();

            if (count($member) > 0) {
                return response()->json($member, 200);
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
                $member_all = MemberModel::with('organizations', 'puroks', 'groups')
            ->join('organizations', 'organizations.id', '=', 'members.org_id')
            ->join('purok', 'purok.id', '=', 'members.purok_id')
             ->join('groups', 'members.group_id', '=', 'groups.id')
            ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
             'members.gender', 'members.birthday', 'members.address',
             'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
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
            // $member = MemberModel::find($id);
            $member = MemberModel::with('organizations', 'puroks', 'groups')
            ->join('organizations', 'organizations.id', '=', 'members.org_id')
            ->join('purok', 'purok.id', '=', 'members.purok_id')
             ->join('groups', 'members.group_id', '=', 'groups.id')
            ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
             'members.gender', 'members.birthday', 'members.address',
             'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
            ->find($id);

            $member_raw = MemberModel::find($id);

            if ($member) {
               
                return response()->json(["member_info"=>$member,"member_info_raw"=>$member_raw, 200]);
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

        $member_all = MemberModel::with('organizations', 'puroks', 'groups')
        ->join('organizations', 'organizations.id', '=', 'members.org_id')
        ->join('purok', 'purok.id', '=', 'members.purok_id')
         ->join('groups', 'members.group_id', '=', 'groups.id')
        ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
         'members.gender', 'members.birthday', 'members.address',
         'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
        ->find($id);

        $member_raw = MemberModel::find($id);

        $member_list = MemberModel::with('organizations', 'puroks', 'groups')
        ->join('organizations', 'organizations.id', '=', 'members.org_id')
        ->join('purok', 'purok.id', '=', 'members.purok_id')
         ->join('groups', 'members.group_id', '=', 'groups.id')
        ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
         'members.gender', 'members.birthday', 'members.address',
         'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
        ->get();


            return response()->json(["member_info"=>$member_all,"member_info_raw"=>$member_raw,"masterList_data"=>$member_list, 200]);
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

                $member_all = MemberModel::with('organization', 'purok')
                ->join('organizations', 'organizations.id', '=', 'members.org_id')
                ->join('purok', 'purok.id', '=', 'members.purok_id')
                 ->join('groups', 'members.group_id', '=', 'groups.id')
                ->select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
                 'members.gender', 'members.birthday', 'members.address',
                 'organizations.kapisanan', 'purok.purok', 'groups.group', 'members.status')
                ->get();
                return response()->json($member_all, 200);
            }else{
                return response()->json(['message'=>'Member not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}