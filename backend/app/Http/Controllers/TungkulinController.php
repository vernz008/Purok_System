<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TungkulinModel;

class TungkulinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $tungkulin = TungkulinModel::all();

            if (count($tungkulin) > 0) {
                return response()->json($tungkulin, 200);
            }else {
                return response()->json(['message' => 'No tungkulin found'], 404);
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
                'tungkulin' => "required",
            ]);

            //2. Execute the Query
            $tungkulin = TungkulinModel::create([
                'tungkulin' => $request->tungkulin,
            ]);

            //3. Process the Result
            if ($tungkulin) {
                $tungkulin_all = TungkulinModel::all();
                return response()->json($tungkulin_all, 201);
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
            $tungkulin = TungkulinModel::find($id);

            if ($tungkulin) {
                return response()->json($tungkulin, 200);
            }else{
                return response()->json(['message' => 'tungkulin Not Found'], 404);
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
               'tungkulin' => "required",
           ]);

           //2. Execute the Query
           $tungkulin = TungkulinModel::find($id);

           //3. Process the Result
           if ($tungkulin) {
           $tungkulin->tungkulin = $request->tungkulin;
           $tungkulin->save();
           
               $tungkulin_all = TungkulinModel::all();
               return response()->json($tungkulin_all, 201);
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
            $tungkulin = TungkulinModel::find($id);

            if ($tungkulin) {
                $tungkulin->delete();

                $tungkulin_all = TungkulinModel::all();
                return response()->json($tungkulin_all, 200);
            }else{
                return response()->json(['message'=>'Tungkulin not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}