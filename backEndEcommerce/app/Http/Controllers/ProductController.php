<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
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
            $data['product'] = $product;
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
