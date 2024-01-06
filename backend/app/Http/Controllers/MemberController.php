<?php

namespace App\Http\Controllers;

use App\Models\MemberModel;
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
            $member = MemberModel::with('organizations', 'purok')
            ->join('organizations', 'organizations.id', '=', 'members.orgid')
            ->join('purok', 'members.purokid', '=', 'purok.id')
            ->select('members.firstname', 'members.middlename', 'members.lastname',
             'members.gender', 'members.birthday', 'members.address',
             'organizations.kapisanan',
              'purok.purok', 'purok.group', 'members.status')
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
                'orgid' => "required|numeric",
                'purokid' => "required|numeric",
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
                'orgid' => $request->orgid,
                'purokid' => $request->purokid,
                'status' => $request->status,
            ]);

            //3. Process the Result
            if ($member) {
                $member_all = MemberModel::with('organizations', 'purok')
            ->join('organizations', 'organizations.id', '=', 'members.orgid')
            ->join('purok', 'members.purokid', '=', 'purok.id')
            ->select('members.firstname', 'members.middlename', 'members.lastname',
             'members.gender', 'members.birthday', 'members.address',
             'organizations.kapisanan',
              'purok.purok', 'purok.group', 'members.status')
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
            $member = MemberModel::find($id);

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
            $request->validate([
                'firstname' => "required",
                'middlename' => "required",
                'lastname' => "required",
                'gender' => "required",
                'birthday' => "required",
                'address' => "required",
                'orgid' => "required|numeric",
                'purokid' => "required|numeric",
                'status' => "required",
           ]);

           //2. Execute the Query
           $member = MemberModel::find($id);

           //3. Process the Result
           if ($member) {
           $member->firstname = $request->firstname;
           $member->middlename = $request->middlename;
           $member->lastname = $request->lastname;
           $member->gender = $request->gender;
           $member->birthday = $request->birthday;
           $member->address = $request->address;
           $member->orgid = $request->orgid;
           $member->purokid = $request->purokid;
           $member->status = $request->status;
           $member->save();
           
           $member_all = MemberModel::with('organization', 'purok')
           ->join('organization', 'organization.id', '=', 'members.orgid')
           ->join('purok', 'members.purokid', '=', 'purok.id')
           ->select('members.firstname', 'members.middlename', 'members.lastname', 'members.gender', 'members.birthday', 'members.address', 'organization.kapisanan', 'purok.purok', 'purok.group', 'members.status')
           ->get();
               return response()->json($member_all, 201);
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
                ->join('organization', 'organization.id', '=', 'members.orgid')
                ->join('purok', 'members.purokid', '=', 'purok.id')
                ->select('members.firstname', 'members.middlename', 'members.lastname', 'members.gender', 'members.birthday', 'members.address', 'organization.kapisanan', 'purok.purok', 'purok.group', 'members.status')
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