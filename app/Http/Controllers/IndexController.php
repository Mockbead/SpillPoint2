<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        $title = 'FUCKING HELL!';

        return response()->json(['title' => $title]);
    }
}
