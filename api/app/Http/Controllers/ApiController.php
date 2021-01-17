<?php

namespace App\Http\Controllers;

use App\Models\Work;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache; 

class ApiController extends Controller
{
      public function work()
    {

    // if ($works = Redis::get('works.all')) {
    //     return json_decode($works);
    // }

    // get all post
    // $works = Work::with('users')->latest()->paginate(16);

    // store into redis
    // $works = Cache::remember('works.all',120,$works);

    // return all posts
    // return $works;

    

    return Cache::remember('works.all', 60 * 60 * 24, function () { 
        return Work::all(); 
    }); 

    }
}

