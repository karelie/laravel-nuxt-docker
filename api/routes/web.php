<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('api/works', [ApiController::class, 'works']);
Route::get('api/work/{work:id}', [ApiController::class, 'work']);
Route::get('api/user/{user:id}', [ApiController::class, 'user']);