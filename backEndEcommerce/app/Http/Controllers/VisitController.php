<?php

namespace App\Http\Controllers;

use App\Visit;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    //

    public function store (request $request ) {


        $visit = new Visit();

        $visit->ip_address = $request->ip;

        $visit->save();

        return 'visit saved';
    }
}
