<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id_product';

    protected $fillable = [
        'id_product',
        'name_product',
        'price_product',
        'qt_product'
    ];
}
