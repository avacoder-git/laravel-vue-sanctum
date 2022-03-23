<?php

use App\Http\Controllers\Fruit\IndexController;
use App\Http\Controllers\User\StoreController;
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

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/get', [IndexController::class, '__invoke']);
    Route::group(['prefix' => 'fruits',], function () {
        Route::get('/', [IndexController::class, '__invoke']);

    });

});

//Route::group(['prefix'=> 'users',],function (){
//    Route::post('/',[StoreController::class,'__invoke']);
//
//});


