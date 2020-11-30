<?php

namespace App\Http\Controllers;

use App\Detail;
use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function store(Request $request) {

        $request->validate([
            'address' => 'required|string'
        ]);

        $order = Order::create([
            'address' =>$request->address,
            'total' => 0,
            'user_id'=> 1
        ]);

        $total = 0;

        $cart = json_decode($request->cart);

        for($i=0;$i<count($cart);$i++){
            Detail::create([
                'product_id' => $cart[$i]->id,
                'order_id' => $order->id,
                'price' => $cart[$i]->prix,
                'quantity' => $cart[$i]->quantity
            ]);
            $total+= $cart[$i]->quantity * $cart[$i]->prix;
        }

        $order->total = $total;
        $order->save();

       return $order;
    }
}
