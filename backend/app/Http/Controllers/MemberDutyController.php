<?php

namespace App\Http\Controllers;

use App\Models\MemberDuty;
use Illuminate\Http\Request;

class MemberDutyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $memberduty = MemberDuty::all();

            if (count($memberduty) > 0) {
                return response()->json($memberduty, 200);
            }else {
                return response()->json(['message' => 'No memberduty found'], 404);
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
                'tungid' => "required|numeric",
                'memberid' => "required|numeric",
            ]);

            //2. Execute the Query
            $memberduty = MemberDuty::create([
                'tungid' => $request->tungid,
                'memberid' => $request->memberid,
            ]);

            //3. Process the Result
            if ($memberduty) {
                $memberduty_all = MemberDuty::all();
                return response()->json($memberduty_all, 201);
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
            $memberduty = MemberDuty::find($id);

            if ($memberduty) {
                return response()->json($memberduty, 200);
            }else{
                return response()->json(['message' => 'memberduty Not Found'], 404);
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
                'tungid' => "required|numeric",
                'memberid' => "required|numeric",
           ]);

           //2. Execute the Query
           $memberduty = MemberDuty::find($id);

           //3. Process the Result
           if ($memberduty) {
           $memberduty->tungid = $request->tungid;
           $memberduty->memberid = $request->memberid;
           $memberduty->save();
           
               $memberduty_all = MemberDuty::all();
               return response()->json($memberduty_all, 201);
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
            $memberduty = MemberDuty::find($id);

            if ($memberduty) {
                $memberduty->delete();

                $memberduty_all = MemberDuty::all();
                return response()->json($memberduty_all, 200);
            }else{
                return response()->json(['message'=>'MemberDuty not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}