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

        return 'good';

        $min = 0;
        $max  = 1000000;

        $min = $request->get('minP');
        $max = $request->get('maxP');

        $products = Product::query()
            ->where('name', 'LIKE', "%{$request->get('searchP')}%")
            ->where('category_id',$request->get('categoryP')===0?'!=':'=',$request->get('categoryP'))
            ->whereBetween('prix', [$min, $max])
            ->orderBy('prix', $request->get('sortedByP')==2?'desc':'asc')
            ->paginate(1);


        return $this->returnData('products',$products,'with success');
    }

}
