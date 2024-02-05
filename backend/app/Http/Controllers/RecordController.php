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
            // $record = RecordModel::with('members')
            // ->join('members', 'members.id', '=',  'records.member_id')
            // ->select('records.id', 'records.att_id', 'records.member_id', 'members.firstname', 'members.middlename', 'members.lastname')
            // ->get()
            // ;

            // $record = RecordModel::select([
            //     'records.id',
            //     'records.att_id',
            //     'records.member_id',
            //     'members.firstname',
            //     'members.middlename',
            //     'members.lastname',
            //     'attendance.pamagat'
            // ])
            // ->leftJoin('members', 'members.id', '=', 'records.member_id')
            // ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
            // ->get();

            $record_all = MemberModel::select([
                'records.id',
                'members.id AS member_Id',
                'attendance.id AS attendance_Id',
                'records.att_id AS Record_Attendance_Id',
                'records.member_id AS Record_Member_Id',
                'attendance.pamagat AS Attendance_Title',
                'attendance.schedule AS Attendance_Date',
                'members.firstname AS Given_Name',
                'members.middlename AS Middle_Initials',
                'members.lastname AS Surname',
                'organizations.kapisanan AS Organization'
            ])
            ->join('organizations', 'organizations.id', '=', 'members.org_id')
            ->join('records', 'records.member_id', '=', 'members.id')
            ->join('attendance', 'attendance.id', '=', 'records.att_id')
            ->get();

        //     $record = RecordModel::select('members.id', 'members.firstname', 'members.middlename', 'members.lastname',
        //     'records.att_id', 'records.member_id', 'records.id AS record_id', 
        //     'organizations.kapisanan')
        //    ->leftJoin('members', 'members.id', '=', 'records.member_id')
        //    ->leftJoin('organizations', 'members.org_id', '=', 'organizations.id')
        //    ->get();

        // $record = MemberModel::select([
        //     'members.id AS Member_Id',
        //     'attendance.id AS Attendance_Id',
        //     'records.id AS Record_Id',
        //     'records.att_id AS Record_Attendance_Id',
        //     'records.member_id AS Record_Member_Id',
        //     'attendance.pamagat AS Attendance_Title',
        //     'attendance.schedule AS Attendance_Date',
        //     'members.firstname AS Given_Name',
        //     'members.middlename AS Middle_Initials',
        //     'members.lastname AS Surname',
        //     'organizations.kapisanan AS Organization'
        // ])
        // ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
        // ->leftJoin('records', 'records.member_id', '=', 'members.id')
        // ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
        // ->get();


            if (count($record_all) > 0) {
                return response()->json($record_all, 200);
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
                // $record_all = MemberModel::select([
                //     'members.id', 'members.firstname', 'members.middlename', 'members.lastname',
                //     'records.att_id', 'records.member_id', 'organizations.kapisanan'
                // ])
                // ->leftJoin('records', 'members.id', '=', 'records.member_id')
                // ->leftJoin('organizations', 'members.org_id', '=', 'organizations.id')
                // ->get(); 
                // $record_all = MemberModel::select([
                //     'members.id AS Member_Id',
                //     'attendance.id AS Attendance_Id',
                //     'records.id AS Record_Id',
                //     'records.att_id AS Record_Attendance_Id',
                //     'records.member_id AS Record_Member_Id',
                //     'attendance.pamagat AS Attendance_Title',
                //     'attendance.schedule AS Attendance_Date',
                //     'members.firstname AS Given_Name',
                //     'members.middlename AS Middle_Initials',
                //     'members.lastname AS Surname',
                //     'organizations.kapisanan AS Organization'
                // ])
                // ->leftJoin('organizations', 'organizations.id', '=', 'members.org_id')
                // ->leftJoin('records', 'records.member_id', '=', 'members.id')
                // ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
                // ->get();

                // $record_all = RecordModel::select([
                //     'records.id',
                //     'records.att_id',
                //     'records.member_id',
                //     'members.firstname',
                //     'members.middlename',
                //     'members.lastname',
                //     'attendance.pamagat'
                // ])
                // ->leftJoin('members', 'members.id', '=', 'records.member_id')
                // ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
                // ->get();

                $record_all = MemberModel::select([
                    'records.id',
                    'members.id AS member_Id',
                    'attendance.id AS attendance_Id',
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
           
        //    $record_all = RecordModel::select([
        //     'records.id',
        //     'records.att_id',
        //     'records.member_id',
        //     'members.firstname',
        //     'members.middlename',
        //     'members.lastname',
        //     'attendance.pamagat'
        // ])
        // ->leftJoin('members', 'members.id', '=', 'records.member_id')
        // ->leftJoin('attendance', 'attendance.id', '=', 'records.att_id')
        // ->get();

        $record_all = MemberModel::select([
            'records.id',
            'members.id AS member_Id',
            'attendance.id AS attendance_Id',
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


               return response()->json($record_all, 200);
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

                $record_all = MemberModel::select([
                    'records.id',
                    'members.id AS member_Id',
                    'attendance.id AS attendance_Id',
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
    

                return response()->json($record_all, 200);
            }else{
                return response()->json(['message'=>'Record not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}