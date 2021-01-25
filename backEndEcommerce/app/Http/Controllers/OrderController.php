<?php

namespace App\Http\Controllers;

use App\Detail;
use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            'user_id'=> auth()->user()->id,
            'status'=>0
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
        if (!auth()->user() || auth()->user()->role!==1) {
            return response()->json('you are not authorized',401);
        }
        $statics = Order::SELECT([
            DB::raw("DATE_FORMAT(created_at,'%Y-%m') AS `date`"),
            DB::raw("SUM(total) AS `solds`")
        ])
            ->groupBy('date')
            ->orderBy('date','ASC')
            ->get()
        ;
    return $statics;
    }

    public function getOrders(Request $request){

        if (!auth()->user() || auth()->user()->role!==1) {
            return response()->json('you are not authorized',401);
        }

        $orders = Order::query();

        /*if (isset($request->get('ordersType'))) {
             $orders->all();

        }
    */
        if ($request->get('ordersType')!==null) {
            $orders->where('status','=',$request->get('ordersType'));
        }

        $orders = Order::orderBy('created_at','DESC')
            ->paginate(10);

        return $orders;
    }

}
