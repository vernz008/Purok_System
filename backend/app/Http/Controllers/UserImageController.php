<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;
use App\Models\UserImageModel;

class UserImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function upload_picture(Request $request)
    {
        try {
            $uuid = Uuid::uuid4();
    
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:20480',
            ]);
    
            $imageName = $uuid . '.' . "png";
    
            // Check if a record with the same company_id already exists
            $existingImage = UserImageModel::where('user_id', $request->user_id)->first();
    
            if (!$existingImage) {
                // If no record exists, proceed with image upload and creation
                $request->image->move(public_path('images/Users/'), $imageName);
                $imagePath = "/images/Users/" . $imageName;
    
                $created_image_data = UserImageModel::create([
                    'user_id' => $request->user_id,
                    'image_name' => $imageName,
                    'image_path' => $imagePath,
                ]);
    
                return response()->json([
                    "system_message" => "Image Updated",
                    "payload" => $created_image_data
                ], 200);
            } else {

                // kapag nag else delete kaagad un existing 
                $filePath = public_path($existingImage->image_path);
                if (file_exists($filePath)) {
                    @unlink($filePath);
                }

                $request->validate([
                    'image' =>'required|image|mimes:jpeg,png,jpg,gif,svg|max:20480',
                ]);
                
                $imageName = $uuid . '.' . "png";

                $request->image->move(public_path('images/Users/'), $imageName);
                $imagePath = "/images/Users/". $imageName;
                $updated_image_data = UserImageModel::where('user_id', $request->user_id)->update([
                    'image_name' => $imageName,
                    'image_path' => $imagePath,
                ]);
                return response()->json([
                    "system_message" => "Image Updated",
                    "payload" => $updated_image_data
                ], 200);
            
                // If a record with the same company_id already exists, return a response indicating that
                // return response()->json([
                //     "system_message" => "Image not updated. Record with the same company_id already exists.",
                // ], 400);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}