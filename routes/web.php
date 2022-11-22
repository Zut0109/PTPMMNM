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
use App\Http\Controllers\ViewerController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\ProducerController;
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
    
    Route::get('editmovie', [MovieDetailController::class, 'show'])->name('editmovie');
    Route::post('uploadmovieimage', [MovieDetailController::class, 'upload'])->name('uploadmovieimage');
    Route::post('uploadvideo', [MovieDetailController::class, 'uploadvideo'])->name('uploadvideo');

    Route::apiResource('tags', TagController::class);

    Route::get('moviedetail',  [ViewerController::class, 'show'])->name('moviedetail');
    Route::get('watch',  [ViewerController::class, 'watch'])->name('watch');
    Route::get('movielist',  [ViewerController::class, 'movielist'])->name('movielist');
    Route::get('animelist',  [ViewerController::class, 'animelist'])->name('animelist');
    Route::get('favoritelist',  [ViewerController::class, 'favoritelist'])->name('favoritelist');
    Route::get('historylist',  [ViewerController::class, 'historylist'])->name('historylist');

    Route::put('addfavorite', [MovieController::class, 'favorite'])->name('addfavorite');
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