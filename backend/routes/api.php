<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\PurokController;
use App\Http\Controllers\TransferController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\TungkulinController;
use App\Http\Controllers\MemberDutyController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\MemberActivityController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserImageController;
use App\Http\Controllers\MemberImageController;
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

// This is Login User (Public Route) No need for token when accessing a request
Route::post("/login", [AuthenticationController::class, 'login']);

// This is Register User (Public Route) No need for token when accessing a request
Route::post("/users", [UserController::class, 'store']);
Route::get("/users", [UserController::class, 'index']);

// Route::group(["middleware"=>["auth:sanctum"]],function() {

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

Route::get("/member", [MemberController::class, 'index']);
Route::post("/member", [MemberController::class, 'store']);
Route::get("/member/{id}", [MemberController::class, 'show']);
Route::put("/member/{id}", [MemberController::class, 'update']);
Route::delete("/member/{id}", [MemberController::class, 'destroy']);
Route::get("/member-record", [MemberController::class, 'members_with_records']);

Route::get("/attendance", [AttendanceController::class, 'index']);
Route::post("/attendance", [AttendanceController::class, 'store']);
Route::get("/attendance/{id}", [AttendanceController::class, 'show']);
Route::put("/attendance/{id}", [AttendanceController::class, 'update']);
Route::delete("/attendance/{id}", [AttendanceController::class, 'destroy']);

Route::get("/record", [RecordController::class, 'index']);
Route::post("/record", [RecordController::class, 'store']);
Route::get("/record/{id}", [RecordController::class, 'show']);
Route::put("/record/{id}", [RecordController::class, 'update']);
Route::delete("/record/{id}", [RecordController::class, 'destroy']);

Route::get("/tungkulin", [TungkulinController::class, 'index']);
Route::post("/tungkulin", [TungkulinController::class, 'store']);
Route::get("/tungkulin/{id}", [TungkulinController::class, 'show']);
Route::put("/tungkulin/{id}", [TungkulinController::class, 'update']);
Route::delete("/tungkulin/{id}", [TungkulinController::class, 'destroy']);

Route::get("/memberduty", [MemberDutyController::class, 'index']);
Route::post("/memberduty", [MemberDutyController::class, 'store']);
Route::get("/memberduty/{id}", [MemberDutyController::class, 'show']);
Route::put("/memberduty/{id}", [MemberDutyController::class, 'update']);
Route::delete("/memberduty/{id}", [MemberDutyController::class, 'destroy']);

Route::get("/activity", [ActivityController::class, 'index']);
Route::post("/activity", [ActivityController::class, 'store']);
Route::get("/activity/{id}", [ActivityController::class, 'show']);
Route::put("/activity/{id}", [ActivityController::class, 'update']);
Route::delete("/activity/{id}", [ActivityController::class, 'destroy']);

Route::get("/memberactivity", [MemberActivityController::class, 'index']);
Route::post("/memberactivity", [MemberActivityController::class, 'store']);
Route::get("/memberactivity/{id}", [MemberActivityController::class, 'show']);
Route::put("/memberactivity/{id}", [MemberActivityController::class, 'update']);
Route::delete("/memberactivity/{id}", [MemberActivityController::class, 'destroy']);

Route::get("/group", [GroupController::class, 'index']);
Route::post("/group", [GroupController::class, 'store']);
Route::get("/group/{id}", [GroupController::class, 'show']);
Route::put("/group/{id}", [GroupController::class, 'update']);
Route::delete("/group/{id}", [GroupController::class, 'destroy']);

// User Image Controller
Route::post("/upload-image-user",[UserImageController::class,"upload_picture"]);

// Member Image Controller
Route::post("/upload-image-member",[MemberImageController::class,"upload_picture"]);

Route::post("/logout", [AuthenticationController::class, 'logout']);

// });
