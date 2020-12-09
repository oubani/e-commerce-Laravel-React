<?php

namespace App\Http\Controllers;

use App\Product;
use App\Traits\GeneralTraits;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    use GeneralTraits;

    // get all categories
    public function search(Request $request)
    {

        $min = 0;
        $max  = 100000;

        $min = $request->minP;
        $max = $request->maxP;
        if ($request->sortedByP==1) {

        }

        $products = Product::query()
            ->where('name', 'LIKE', "%{$request->searchP}%")
            ->where('category')
            ->whereBetween('prix', [$min, $max])
            ->orderBy('prix', $request->sortedByP==2?'desc':'asc')
            ->get();


        return $this->returnData('products',$products,'with success');
    }

}
