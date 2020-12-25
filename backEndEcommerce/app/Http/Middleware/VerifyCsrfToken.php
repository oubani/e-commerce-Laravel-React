<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'api/addProduct',
        '/api/auth/login','/api/auth/register','api/addToFavorite','api/getUserFavorite','api/removeFromFavorite','api/auth/checkAdmin'
    ];
}
