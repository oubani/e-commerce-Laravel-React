<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    //
    protected $fillable = [
        'name', 'description', 'prix', 'stock', 'thumbnail','category_id'
    ];


    // get images product
    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
