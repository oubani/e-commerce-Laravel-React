<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('users', 'UserController@users');
});

Route::post('search','SearchController@search');

Route::resource('category','CategoryController');
Route::post('order','OrderController@store');

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

Route::get('products/new', 'ProductController@newProducts');
Route::get('products/high', 'ProductController@highPromotion'); // i'll fixed it later
Route::get('products/mostOrdered', 'ProductController@mostOrderd'); // i'll fixed it later
Route::get('/products', 'ProductController@index'); // i'll fixed it later
Route::get('/product/{id}', 'ProductController@show'); // Product PAge
