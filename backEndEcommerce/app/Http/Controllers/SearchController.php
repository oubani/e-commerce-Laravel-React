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
        $max  = 1000000;

        $min = $request->minP;
        $max = $request->maxP;

        $products = Product::query()
            ->where('name', 'LIKE', "%{$request->searchP}%")
            ->where('category_id',$request->categoryP===0?'!=':'=',$request->categoryP)
            ->whereBetween('prix', [$min, $max])
            ->orderBy('prix', $request->sortedByP==2?'desc':'asc')
            ->get();


        return $this->returnData('products',$products,'with success');
    }

}
