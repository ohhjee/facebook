<?php

use App\Http\Controllers\Auth\AuthUserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthUserController::class, 'register']);
Route::post('/login', [AuthUserController::class, 'login']);
Route::post('/mobile-reg-name', [AuthUserController::class, 'mobilv1']);
Route::post('/mobile-reg-email', [AuthUserController::class, 'mobilv2']);
Route::post('/mobile-reg-gender', [AuthUserController::class, 'mobilv3']);
Route::post('/mobile-reg-password', [AuthUserController::class, 'mobilv4']);
