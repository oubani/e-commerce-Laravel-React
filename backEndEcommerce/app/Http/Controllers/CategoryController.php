<?php

namespace App\Http\Controllers;

use App\Category;
use App\Traits\GeneralTraits;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use GeneralTraits;
    // get all categories
    public  function index() {
        $categories = Category::get();
        return $this->returnData('categories',$categories,'success ');
    }
}
