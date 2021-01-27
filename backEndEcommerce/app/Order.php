<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 */
class Order extends Model
{
    protected $fillable = [
        'user_id', 'total', 'address','status'
    ];

    // get order's detail
    public function details() {
        return $this->hasMany(Detail::class);
    }

}
