<?php

namespace App\Http\Controllers;

use App\Favorite;
use App\Traits\GeneralTraits;
use App\User;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    //
    use GeneralTraits;

    public function index() {
        $favorites = User::find(auth()->user()->id)->favorites;
        if ($favorites) {
        $favArray = [];
            foreach ($favorites as $favorite) {
                $favArray[]=$favorite->product_id;
            }
        return $this->returnData('fav',$favArray,'all user\'s favorites ');

        };
        return $favorites;

    }



    public function addToFavorite(Request $request) {

        $favorite = new Favorite();
        $favorite->product_id = $request->product_id;
        $favorite->user_id = auth()->user()->id;

        $favorite->save();

        return $favorite;
    }
    public function removeFromFavorite(Request $request) {

        $user_id=auth()->user()->id;
        $product_id= $request->product_id;

        $favorite = Favorite::where('product_id','=',$product_id)->where('user_id','=',$user_id)->get();

        if ($favorite) {
            $favorite[0]->delete();
            return response()->json(['msg'=>'Product deleted from favorite Liste']);
        }else
            return response()->json(['msg'=>'Product not found']);
    }
}
