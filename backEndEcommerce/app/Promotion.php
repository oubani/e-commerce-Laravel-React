<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    //
    protected $fillable = [
        'value', 'product_id', 'date_start', 'date_end'
    ];
}
