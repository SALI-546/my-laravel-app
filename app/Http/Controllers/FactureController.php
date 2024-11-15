<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FactureController extends Controller
{
    public function index()
    {
        return view('factures.index');
    }

    public function create()
    {
        return view('factures.create');
    }

    public function show($facture)
    {
        return view('factures.show');
    }

    public function edit($facture)
    {
        return view('factures.edit');
    }
}
