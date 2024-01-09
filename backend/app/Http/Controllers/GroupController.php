<?php

namespace App\Http\Controllers;

use App\Models\GroupModel;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
try {
    $groups = GroupModel::all();

    if (count($groups) > 0) {
        return response()->json($groups, 200);
    }else{
        return response()->json(['message' => 'No group found'], 404);
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
         //1. Validate the request
         $request->validate([
            "group" => "required",
        ]);

        //2. Execute the Query
    
            $group = GroupModel::create([
                'group'=>$request->group,
            ]);
       
        //3. Process the Result
        if ($group) {
            $group_all = GroupModel::all();
            return response()->json($group_all, 201);
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
            $group = GroupModel::find($id);

            if ($group) {
                return response()->json($group, 200);
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
               'group' => "required",
           ]);

           //2. Execute the Query
           $group = GroupModel::find($id);

           //3. Process the Result
           if ($group) {
           $group->group = $request->group;
        
           $group->save();
           
               $group_all = GroupModel::all();
               return response()->json($group_all, 201);
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
            $group = GroupModel::find($id);

            if ($group) {
                $group->delete();

                $group_all = GroupModel::all();
                return response()->json($group_all, 200);
            }else{
                return response()->json(['message'=>'Group not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}