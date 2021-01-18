<?php

namespace App\Http\Controllers;

use App\Visit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VisitController extends Controller
{
    //

    public function store (request $request ) {


        $visit = new Visit();

        $visit->ip_address = $request->ip;

        $visit->save();

        return 'visit saved';
    }

    public function countVisits () {

        //Visit::create(['ip_address'=>'162:584:132:123']);

        if (!auth()->user() || auth()->user()->role!==1) {
            return response()->json('you are not authorized',401);
        }

        $visits = Visit::select([
                DB::raw("DATE_FORMAT(created_at, '%Y-%m') AS `date`"),
                DB::raw('COUNT(id) AS count'),
            ])
                ->groupBy('date')
                ->orderBy('date', 'ASC')
                ->get();
        return $visits;
    }

}
