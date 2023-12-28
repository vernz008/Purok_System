<?php

namespace App\Http\Controllers;

use App\Models\TransferModel;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $transfer = TransferModel::all();

            if (count($transfer) > 0) {
                return response()->json($transfer, 200);
            }else {
                return response()->json(['message' => 'No transfer found'], 404);
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
                'status' => "required",
               
            ]);

            //2. Execute the Query
            $transfer = TransferModel::create([
                'status' => $request->status,
            ]);

            //3. Process the Result
            if ($transfer) {
                $transfer_all = TransferModel::all();
                return response()->json($transfer_all, 201);
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
            $transfer = TransferModel::find($id);

            if ($transfer) {
                return response()->json($transfer, 200);
            }else{
                return response()->json(['message' => 'Transfer Status Not Found'], 404);
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
               'status' => "required",

           ]);

           //2. Execute the Query
           $transfer = TransferModel::find($id);

           //3. Process the Result
           if ($transfer) {
           $transfer->status = $request->status;
           $transfer->save();
           
               $transfer_all = TransferModel::all();
               return response()->json($transfer_all, 201);
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
            $transfer = TransferModel::find($id);

            if ($transfer) {
                $transfer->delete();

                $transfer_all = TransferModel::all();
                return response()->json($transfer_all, 200);
            }else{
                return response()->json(['message'=>'Transfer Status not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}