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



        $min = $request->get('minP');
        $max = $request->get('maxP');
        $category = $request->get('categoryP');
        $sortedByP=$request->get('sortedByP');


        $products = Product::query()
            ->where('name', 'LIKE', "%{$request->get('searchP')}%")
            ->where('category_id',$category==0?'!=':'=',"$category")
            ->whereBetween('prix', [$min, $max])
            ->orderBy('prix', $sortedByP==2?'desc':'asc')
            ->paginate(3);

        return $this->returnData('products',$products,'with success');
    }

}
