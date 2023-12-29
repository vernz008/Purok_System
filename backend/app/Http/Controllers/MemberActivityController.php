<?php

namespace App\Http\Controllers;

use App\Models\MemberActivityModel;
use Illuminate\Http\Request;

class MemberActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $member_activity = MemberActivityModel::all();

            if (count($member_activity) > 0) {
                return response()->json($member_activity, 200);
            }else {
                return response()->json(['message' => 'No member_activity found'], 404);
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
                'memberid' => "required|numeric",
                'actid' => "required|numeric",
                'notes' => "required",
            ]);

            //2. Execute the Query
            $member_activity = MemberActivityModel::create([
                'memberid' => $request->memberid,
                'actid' => $request->actid,
                'notes' => $request->notes,
            ]);

            //3. Process the Result
            if ($member_activity) {
                $member_activity_all = MemberActivityModel::all();
                return response()->json($member_activity_all, 201);
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
            $member_activity = MemberActivityModel::find($id);

            if ($member_activity) {
                return response()->json($member_activity, 200);
            }else{
                return response()->json(['message' => 'member_activity Not Found'], 404);
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
                'memberid' => "required|numeric",
                'actid' => "required|numeric",
                'notes' => "required",
           ]);

           //2. Execute the Query
           $member_activity = MemberActivityModel::find($id);

           //3. Process the Result
           if ($member_activity) {
           $member_activity->memberid = $request->memberid;
           $member_activity->actid = $request->actid;
           $member_activity->notes = $request->notes;
           $member_activity->save();
           
               $member_activity_all = MemberActivityModel::all();
               return response()->json($member_activity_all, 201);
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
            $member_activity = MemberActivityModel::find($id);

            if ($member_activity) {
                $member_activity->delete();

                $member_activity_all = MemberActivityModel::all();
                return response()->json($member_activity_all, 200);
            }else{
                return response()->json(['message'=>'member_activity not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}