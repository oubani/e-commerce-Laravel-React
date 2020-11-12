<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    //
    protected $fillable = [
        'product_id', 'order_id', 'quantity', 'price'
    ];
}
