<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 */
class Detail extends Model
{
    //
    protected $fillable = [
        'product_id', 'order_id', 'quantity', 'price'
    ];

    public function product () {
        return $this->belongsTo(Product::class,'product_id');
    }
}
