<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\MovieDetailController;
use App\Http\Controllers\FileuploadController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::get('index', HomeController::class)->name('index');
    Route::get('dashboard', DashboardController::class)->name('dashboard')->middleware('is_admin');
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
    
    Route::apiResource('users', UserController::class);

    Route::get('profile', ProfileController::class)->name('profile');

    Route::get('viewerprofile', [ProfileController::class, 'viewerprofile'])->name('viewerprofile');

    Route::post('profile', [ProfileController::class, 'upload'])->name('profile.upload');

    Route::apiResource('movies', MovieController::class);
    
    Route::post('moviedetail', [MovieDetailController::class, 'upload'])->name('moviedetail.upload');

});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);
    
    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);
    
    Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
    Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
});

Route::get('/token', function (Request $request) {
    $token = $request->session()->token();
 
    $token = csrf_token();
});