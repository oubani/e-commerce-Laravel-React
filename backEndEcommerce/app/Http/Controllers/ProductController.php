<?php

namespace App\Http\Controllers;

use App\Product;
use App\Traits\GeneralTraits;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;

class ProductController extends Controller
{

    use GeneralTraits;

    /**
     * Display a listing of the new products.
     *
     * @return \Illuminate\Http\Response
     */
    public function newProducts()
    {
        // get new products

        try {
            $products = Product::orderBy('id', 'desc')->take(5)->get();
            return $products;
        } catch (\Throwable $th) {
            return 'No product';
        }
    }
    public function highPromotion()
    {
        try {
            $products = Product::all()->take(3);
            return $products;
        } catch (\Throwable $th) {
            return 'No product';
        }
    }
    public function mostOrderd()
    {
        try {
            $products = Product::all()->take(3);
            return $products;
        } catch (\Throwable $th) {
            return 'No product';
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return '112';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            $product = new Product();

            $product->name = $request->name;
            $product->description = $request->description;
            $product->prix = $request->prix;
            $product->stock = $request->stock;
            $product->category_id = $request->category_id;
            $product->thumbnail = $request->thumbnail;
            $product->save();
            return $this->returnSuccess(200,'product added ');
        }catch (Exception $ex) {
            return response()->json(['msg'=>"product add faild { $ex}"],400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = [];
        try {
            $product = Product::findorFail($id);
            $data['productInfo'] = $product;
            $data['images'] = $product->images;
            return $data;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
