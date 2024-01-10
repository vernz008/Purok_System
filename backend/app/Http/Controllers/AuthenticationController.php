<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthenticationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request) {

        try {

            $fields = $request->validate([
                'username' => 'required|string',
                'password' => 'required|string'
            ]);
    
            // Check email
            $user = User::where('username', $fields['username'])->first();
    
            if (!$user){
                return response()->json(['message' => 'User Data is empty'], 404);
            }
            // Check Credentials
            if ($user->username == $request->username && $user->password == $request->password){
                $token = $user->createToken('authentication_key_00001')->plainTextToken;
                return response()->json(["access_token"=>$token,"user_role"=>$user->role,200]);

            }else{

                return response()->json(['message'=>'Bad Credentials'], 401);
            }
           
    

        } catch (\Exception $error) {
            throw $error;
        }
    }

    public function logout(Request $request) {
        try {
            $user = $request->user();
            $user->currentAccessToken()->delete();
            return response()->json("Logout");
        } catch (\Exception $error) {
            throw $error;
        }
    }
    
    public function index()
    {
        //
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