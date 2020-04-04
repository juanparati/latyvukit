<?php

use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Auth;

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

// Inject Authentication routes
Auth::routes();


// Additional routes...
Route::get('/home', 'HomeController@index')->name('home');


Route::get('/', function () {
    if (Auth::guest())
        return redirect()->route('login');
    else
        return redirect()->route('home');
});
