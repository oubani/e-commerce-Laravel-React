<?php

namespace App\Http\Controllers;

use App\Detail;
use App\Order;
use Illuminate\Http\Request;
use Stripe;

class OrderController extends Controller
{
    //
    public function store(Request $request) {

        try {

            $request->validate([
                'address' => 'required|string'
        ]);

        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $token = json_decode($request->token);

        $total = 0;

        $cart = json_decode($request->cart);

        for($i=0;$i<count($cart);$i++){

            $total+= $cart[$i]->quantity * $cart[$i]->prix;
        }

        $charge = Stripe\Charge::create([
            'amount'=>$total,
            'currency'=>'usd',
            'description'=> 'order from electroStore',
            'source'=> $token->id
            ]);

        $order = Order::create([
            'address' =>$request->address,
            'total' => $total,
            'user_id'=> auth()->user()->id
            ]);




        for($i=0;$i<count($cart);$i++){
            Detail::create([
                'product_id' => $cart[$i]->id,
                'order_id' => $order->id,
                'price' => $cart[$i]->prix,
                'quantity' => $cart[$i]->quantity
                ]);
            }

        return response()->json(['message'=>'success']);

        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['message'=>'faild']);
        }

    }


    public function getOrdersStatics () {
        $statics = Order::select('total')->groupBy('created_at')->get();

    return $statics;
    }

}
