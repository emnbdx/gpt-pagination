<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->input('page', 1);
        $perPage = $request->input('perPage', 10);

        $items = Item::skip(($page - 1) * $perPage)->take($perPage)->get();

        return response()->json($items);
    }
}
