<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class IndexController extends Controller
{
    public function index()
    {
        $title = 'Home';

        return response()->json(['title' => $title]);
    }
}
