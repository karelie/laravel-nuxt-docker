<?php

namespace App\Http\Controllers;

use App\Models\Work;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache; 

class ApiController extends Controller
{
      public function works()
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

    $currentPage = request()->get('page',1);
    return Cache::remember('works.all-' . $currentPage, 60 * 60 * 24, function () { 
        return Work::with('users')->paginate(21); 
    }); 

    }

    public function work(Work $work)
    {

    $id = $work->id;
    return Cache::remember('work.id-' . $id, 60 * 60 * 24, function () use ($id) { 
        return Work::with('users')->get()->find($id);
    }); 
    }


    public function user(User $user)
    {

    $id = $user->id;
    return Cache::remember('user.id-' . $id, 60 * 60 * 24, function () use ($id) { 
        return User::with('works')->get()->find($id);
    }); 
    }
}

