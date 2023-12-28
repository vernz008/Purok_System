<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\PurokController;
use App\Http\Controllers\TransferController;
use App\Http\Controllers\MemberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post("/login", [AuthenticationController::class, 'login']);

Route::group(["middleware"=>["auth:sanctum"]],function() {
Route::get("/users", [UserController::class, 'index']);
Route::post("/users", [UserController::class, 'store']);
Route::get("/users/{id}", [UserController::class, 'show']);
Route::put("/users/{id}", [UserController::class, 'update']);
Route::delete("/users/{id}", [UserController::class, 'destroy']);

Route::get("/org", [OrganizationController::class, 'index']);
Route::post("/org", [OrganizationController::class, 'store']);
Route::get("/org/{id}", [OrganizationController::class, 'show']);
Route::put("/org/{id}", [OrganizationController::class, 'update']);
Route::delete("/org/{id}", [OrganizationController::class, 'destroy']);

Route::get("/purok", [PurokController::class, 'index']);
Route::post("/purok", [PurokController::class, 'store']);
Route::get("/purok/{id}", [PurokController::class, 'show']);
Route::put("/purok/{id}", [PurokController::class, 'update']);
Route::delete("/purok/{id}", [PurokController::class, 'destroy']);

Route::get("/transfer", [TransferController::class, 'index']);
Route::post("/transfer", [TransferController::class, 'store']);
Route::get("/transfer/{id}", [TransferController::class, 'show']);
Route::put("/transfer/{id}", [TransferController::class, 'update']);
Route::delete("/transfer/{id}", [TransferController::class, 'destroy']);

Route::get("/member", [MemberController::class, 'index']);
Route::post("/member", [MemberController::class, 'store']);
Route::get("/member/{id}", [MemberController::class, 'show']);
Route::put("/member/{id}", [MemberController::class, 'update']);
Route::delete("/member/{id}", [MemberController::class, 'destroy']);


Route::post("/logout", [AuthenticationController::class, 'logout']);
});