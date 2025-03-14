<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\DashboardStatsController;
use App\Http\Controllers\API\DevisController as APIDevisController;
use App\Http\Controllers\API\ServiceController as APIServiceController;
use App\Http\Controllers\API\ProjetController as APIProjetController;
use App\Http\Controllers\API\CoursController as APICoursController;
use App\Http\Controllers\API\UserController as APIUserController;
use App\Http\Controllers\API\SettingsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/dashboard-stats', [DashboardStatsController::class, 'index']);

Route::middleware('auth:sanctum')->get('/devis', [APIDevisController::class, 'index']);

Route::middleware('auth:sanctum')->get('/services', [APIServiceController::class, 'index']);
Route::middleware('auth:sanctum')->get('/projets', [APIProjetController::class, 'index']);
Route::middleware('auth:sanctum')->get('/cours', [APICoursController::class, 'index']);
Route::middleware('auth:sanctum')->get('/users', [APIUserController::class, 'index']);
Route::middleware('auth:sanctum')->put('/settings', [SettingsController::class, 'update']);
