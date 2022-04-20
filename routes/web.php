<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;

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

Route::get('/', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

//Task routes
Route::get('/api/task/search', [TaskController::class, 'search']);
Route::get('/api/task/sort', [TaskController::class, 'sortBy']);
Route::get('/api/tasks/expand={child}', [TaskController::class, 'expand']);
Route::get('/api/tasks', [TaskController::class, 'index']);
Route::get('/api/task/{id}', [TaskController::class, 'show']);
Route::put('/api/task/{id}', [TaskController::class, 'update']);
Route::post('/api/task', [TaskController::class, 'store']);
Route::delete('/api/task/{id}', [TaskController::class, 'destroy']);

//User routes
Route::get('/user', function () {
        return view('user');
    });
Route::get('/api/users', [UserController::class, 'index']);
Route::get('/api/user/{id}', [UserController::class, 'show']);
Route::delete('/api/user/{id}', [UserController::class, 'destroy']);