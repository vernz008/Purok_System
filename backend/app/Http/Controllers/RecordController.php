<?php

namespace App\Http\Controllers;

use App\Models\MemberModel;
use App\Models\RecordModel;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $record = RecordModel::with('members')
            ->join('members', 'members.id', '=',  'records.member_id')
            ->select('records.id', 'records.att_id', 'records.member_id', 'members.firstname', 'members.middlename', 'members.lastname')
            ->get()
            ;

            if (count($record) > 0) {
                return response()->json($record, 200);
            }else {
                return response()->json(['message' => 'No record found'], 404);
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
                'att_id' => "required|numeric",
                'member_id' => "required|numeric",
            ]);

            //2. Execute the Query
            $record = RecordModel::create([
                'att_id' => $request->att_id,
                'member_id' => $request->member_id,
            ]);

            //3. Process the Result
            if ($record) {
                $record_all = MemberModel::select([
                    'members.id', 'members.firstname', 'members.middlename', 'members.lastname',
                    'records.att_id', 'records.member_id', 'organizations.kapisanan'
                ])
                ->leftJoin('records', 'members.id', '=', 'records.member_id')
                ->leftJoin('organizations', 'members.org_id', '=', 'organizations.id')
                ->get(); 

                
                // $record_all = RecordModel::with("members")
                // ->join('members', 'members.id', '=',  'records.member_id')
                // ->select('records.id', 'records.att_id', 'records.member_id', 'members.firstname', 'members.middlename', 'members.lastname')
                // ->get()
                ;
                return response()->json($record_all, 201);
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
            $record = RecordModel::find($id);

            if ($record) {
                return response()->json($record, 200);
            }else{
                return response()->json(['message' => 'Record Not Found'], 404);
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
                'attid' => "required|numeric",
                'memberid' => "required|numeric",
           ]);

           //2. Execute the Query
           $record = RecordModel::find($id);

           //3. Process the Result
           if ($record) {
           $record->attid = $request->attid;
           $record->memberid = $request->memberid;
           $record->save();
           
           $record_all = RecordModel::with("members")
           ->join('members', 'members.id', '=',  'records.member_id')
           ->select('records.id', 'records.att_id', 'records.member_id', 'members.firstname', 'members.middlename', 'members.lastname')
           ->get()
           ;
               return response()->json($record_all, 201);
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
            $record = RecordModel::find($id);

            if ($record) {
                $record->delete();

                $record_all = RecordModel::with("members")
                ->join('members', 'members.id', '=',  'records.member_id')
                ->select('records.id', 'records.att_id', 'records.member_id', 'members.firstname', 'members.middlename', 'members.lastname')
                ->get()
                ;
                return response()->json($record_all, 200);
            }else{
                return response()->json(['message'=>'Record not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}