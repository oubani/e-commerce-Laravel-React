<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('users', 'UserController@users');
});

Route::get('search','SearchController@search');
Route::get('search7',function(){return 'search';});

Route::resource('category','CategoryController');
Route::post('order','OrderController@store');

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

Route::get('products/new', 'ProductController@newProducts');
Route::get('products/high', 'ProductController@highPromotion'); // i'll fixed it later
Route::get('products/mostOrdered', 'ProductController@mostOrderd'); // i'll fixed it later
Route::get('/products', 'ProductController@index'); // i'll fixed it later
Route::get('/product/{id}', 'ProductController@show'); // Product PAge


// Route::group([

//     'middleware' => 'api',
//     'prefix' => 'auth'

// ], function ($router) {

//     Route::post('login', 'AuthController@login');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');

// });