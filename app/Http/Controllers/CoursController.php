<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CoursController extends Controller
{
    public function index()
    {
        return view('formation.cours.index');
    }

    public function create()
    {
        return view('formation.cours.create');
    }

    public function show($cours)
    {
        return view('formation.cours.show');
    }

    public function edit($cours)
    {
        return view('formation.cours.edit');
    }
}
