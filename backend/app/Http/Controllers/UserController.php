<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $users = User::all();

            if (count($users) > 0) {
            return response()->json($users, 200);
            }else{
            return response()->json(['message'=>'No User Found'], 400);
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
                'firstname' => "required",
                'middlename' => "required",
                'lastname' => "required",
                'username' => "required",
                'email' => "required",
                'password' => "required",
                'role' => "required",
            ]);

             //2. Execute the Query
             $user = User::create([
                'firstname' => $request->firstname,
                'middlename' => $request->middlename,
                'lastname' => $request->lastname,
                'username' => $request->username,
                'email' => $request->email,
                'password' => $request->password,
                'role' => $request->role,
            ]);

            //3. Process the Result
            if ($user) {
                $user_all = User::all();
                return response()->json($user_all, 201);
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
            $user = User::find($id);

            if ($user) {
                return response()->json($user, 200);
            }else{
                return response()->json(['message' => 'User Not Found'], 404);
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
                'firstname' => "required",
                'middlename' => "required",
                'lastname' => "required",
                'username' => "required",
                'email' => "required",
                'password' => "required",
                'role' => "required",
            ]);

           //2. Execute the Query
           $user = User::find($id);

           //3. Process the Result
           if ($user) {
           $user->firstname = $request->firstname;
           $user->middlename = $request->middlename;
           $user->lastname = $request->lastname;
           $user->username = $request->username;
           $user->email = $request->email;
           $user->password = $request->password;
           $user->role = $request->role;
           $user->save();
           
               $user_all = User::all();
               return response()->json($user_all, 201);
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
            $user = User::find($id);

            if ($user) {
                $user->delete();

                $user_all = User::all();
                return response()->json($user_all, 200);
            }else{
                return response()->json(['message'=>'User not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}