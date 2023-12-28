<?php

namespace App\Http\Controllers;

use App\Models\PurokModel;
use Illuminate\Http\Request;

class PurokController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $purok = PurokModel::all();

            if (count($purok) > 0) {
                return response()->json($purok, 200);
            }else {
                return response()->json(['message' => 'No purok found'], 404);
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
                'purok' => "required",
                'group' => "required|numeric",
            ]);

            //2. Execute the Query
            $purok = PurokModel::create([
                'purok' => $request->purok,
                'group' => $request->group,
            ]);

            //3. Process the Result
            if ($purok) {
                $purok_all = PurokModel::all();
                return response()->json($purok_all, 201);
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
            $purok = PurokModel::find($id);

            if ($purok) {
                return response()->json($purok, 200);
            }else{
                return response()->json(['message' => 'Purok Not Found'], 404);
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
               'purok' => "required",
               'group' => "required|numeric",
           ]);

           //2. Execute the Query
           $purok = PurokModel::find($id);

           //3. Process the Result
           if ($purok) {
           $purok->purok = $request->purok;
           $purok->group = $request->group;
           $purok->save();
           
               $purok_all = PurokModel::all();
               return response()->json($purok_all, 201);
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
            $purok = PurokModel::find($id);

            if ($purok) {
                $purok->delete();

                $purok_all = PurokModel::all();
                return response()->json($purok_all, 200);
            }else{
                return response()->json(['message'=>'Purok not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}