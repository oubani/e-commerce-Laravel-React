<?php

use Illuminate\Support\Facades\Route;


Route::get('search','SearchController@search');
Route::get('search7',function(){return 'search';});

Route::resource('category','CategoryController');
Route::post('order','OrderController@store');


/*Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');*/

Route::get('products/new', 'ProductController@newProducts');
Route::get('products/high', 'ProductController@highPromotion'); // i'll fixed it later
Route::get('products/mostOrdered', 'ProductController@mostOrderd'); // i'll fixed it later
Route::get('/products', 'ProductController@index'); // i'll fixed it later
Route::get('/product/{id}', 'ProductController@show'); // Product PAge


Route::group([
     'middleware' => 'api',
     'prefix' => 'auth'
 ], function ($router) {
     Route::post('login', 'AuthController@login');
     Route::post('register','AuthController@register');
     Route::post('logout', 'AuthController@logout');
     Route::post('refresh', 'AuthController@refresh');
     Route::post('me', 'AuthController@me');
     Route::post('checkAdmin','AuthController@checkAdmin'); // return true if admin
    });

Route::group(['middleware' => 'api'],function(){
    Route::post('getUserFavorite','FavoriteController@index');
    Route::post('addToFavorite','FavoriteController@addToFavorite');
    Route::post('removeFromFavorite','FavoriteController@removeFromFavorite');
    Route::post('/addProduct','ProductController@store');
    Route::get('getOrdersStatics','OrderController@getOrdersStatics');
    Route::post('/visit','VisitController@store');
});

