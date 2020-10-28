<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
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

Route::middleware('auth:sanctum')->get('users', 'UserController@users');
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::get('products/new', 'ProductController@newProducts');
Route::get('products/high', 'ProductController@highPromotion'); // i'll fixed it later
Route::get('products/mostOrdered', 'ProductController@mostOrderd'); // i'll fixed it later
Route::get('/products', 'ProductController@index'); // i'll fixed it later
Route::get('/product/{id}', 'ProductController@show'); // i'll fixed it later
