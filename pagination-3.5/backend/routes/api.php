<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/items', 'ItemController@index');
