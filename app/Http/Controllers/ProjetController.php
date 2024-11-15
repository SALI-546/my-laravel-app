<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjetController extends Controller
{
    public function index()
    {
        return view('projets.index');
    }

    public function create()
    {
        return view('projets.create');
    }

    public function show($projet)
    {
        return view('projets.show');
    }

    public function edit($projet)
    {
        return view('projets.edit');
    }
}
