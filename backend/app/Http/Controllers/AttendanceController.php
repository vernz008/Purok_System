<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\AttendanceModel;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $attendance = AttendanceModel::all();

            if (count($attendance) > 0) {
                return response()->json($attendance, 200);
            }else {
                return response()->json(['message' => 'No attendance found'], 404);
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
                'userid' => "required",
                'pamagat' => "required",
            ]);

            //2. Execute the Query
            $attendance = AttendanceModel::create([
                'userid' => $request->userid,
                'pamagat' => $request->pamagat,
            ]);

            //3. Process the Result
            if ($attendance) {
                $attendance_all = AttendanceModel::all();
                return response()->json($attendance_all, 201);
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
            $attendance = AttendanceModel::find($id);

            if ($attendance) {
                return response()->json($attendance, 200);
            }else{
                return response()->json(['message' => 'Attendance Not Found'], 404);
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
                'userid' => "required|numeric",
                'pamagat' => "required",
           ]);

           //2. Execute the Query
           $attendance = AttendanceModel::find($id);

           //3. Process the Result
           if ($attendance) {
           $attendance->userid = $request->userid;
           $attendance->pamagat = $request->pamagat;
           $attendance->save();
           
               $attendance_all = AttendanceModel::all();
               return response()->json($attendance_all, 201);
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
            $attendance = AttendanceModel::find($id);

            if ($attendance) {
                $attendance->delete();

                $attendance_all = AttendanceModel::all();
                return response()->json($attendance_all, 200);
            }else{
                return response()->json(['message'=>'Attendance not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}