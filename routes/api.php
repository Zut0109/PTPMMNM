<?php

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
Route::prefix('posts')->name('posts.')->group(function () {
    Route::get('', 'PostController@index')->name('index'); //Danh sách;
    Route::post('{post}', 'PostController@store')->name('store'); //Lưu;
    Route::get('{post}', 'PostController@show')->name('show'); //Chi tiết;
    Route::post('{post}', 'PostController@update')->name('update'); //Cập nhập;
    Route::post('delete/{post}', 'PostController@delete')->name('delete'); //Xóa;
});