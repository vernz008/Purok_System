<?php

namespace App\Http\Controllers;

use App\Models\OrganizationModel;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $organization = OrganizationModel::all();

            if (count($organization) > 0) {
                return response()->json($organization, 200);
            }else {
                return response()->json(['message' => 'No organization found'], 404);
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
                'kapisanan' => "required",
                'year' => "required",
            ]);

            //2. Execute the Query
            $organization = OrganizationModel::create([
                'kapisanan' => $request->kapisanan,
                'year' => $request->year,
            ]);

            //3. Process the Result
            if ($organization) {
                $organization_all = OrganizationModel::all();
                return response()->json($organization_all, 201);
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
            $organization = OrganizationModel::find($id);

            if ($organization) {
                return response()->json($organization, 200);
            }else{
                return response()->json(['message' => 'Organization Not Found'], 404);
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
                'kapisanan' => "required",
                'year' => "required",
           ]);

           //2. Execute the Query
           $organization = OrganizationModel::find($id);

           //3. Process the Result
           if ($organization) {
           $organization->kapisanan = $request->kapisanan;
           $organization->year = $request->year;
           $organization->save();
           
               $organization_all = OrganizationModel::all();
               return response()->json($organization_all, 201);
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
            $organization = OrganizationModel::find($id);

            if ($organization) {
                $organization->delete();

                $organization_all = OrganizationModel::all();
                return response()->json($organization_all, 200);
            }else{
                return response()->json(['message'=>'Organization not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}