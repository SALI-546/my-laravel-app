<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return view('services.index');
    }

    public function create()
    {
        return view('services.create');
    }

    public function show($service)
    {
        return view('services.show');
    }

    public function edit($service)
    {
        return view('services.edit');
    }
}
