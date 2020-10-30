<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    //
    protected $fillable = [
        'name', 'description', 'prix', 'stock', 'thumbnail'
    ];


    // get images product
    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
