<?php

namespace App\Http\Controllers;

use App\Models\ActivityModel;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $activity = ActivityModel::all();

            if (count($activity) > 0) {
                return response()->json($activity, 200);
            }else {
                return response()->json(['message' => 'No activity found'], 404);
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
                'activity' => "required",
                'description' => "required",
            ]);

            //2. Execute the Query
            $activity = ActivityModel::create([
                'activity' => $request->activity,
                'description' => $request->description,
            ]);

            //3. Process the Result
            if ($activity) {
                $activity_all = ActivityModel::all();
                return response()->json($activity_all, 201);
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
            $activity = ActivityModel::find($id);

            if ($activity) {
                return response()->json($activity, 200);
            }else{
                return response()->json(['message' => 'activity Not Found'], 404);
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
                'activity' => "required",
                'description' => "required",
           ]);

           //2. Execute the Query
           $activity = ActivityModel::find($id);

           //3. Process the Result
           if ($activity) {
           $activity->product_name = $request->activity;
           $activity->product_code = $request->description;
           $activity->save();
           
               $activity_all = ActivityModel::all();
               return response()->json($activity_all, 201);
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
            $activity = ActivityModel::find($id);

            if ($activity) {
                $activity->delete();

                $activity_all = ActivityModel::all();
                return response()->json($activity_all, 200);
            }else{
                return response()->json(['message'=>'activity not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}