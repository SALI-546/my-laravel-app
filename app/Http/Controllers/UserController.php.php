<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('parametres.utilisateurs.index');
    }

    public function create()
    {
        return view('parametres.utilisateurs.create');
    }

    public function show($user)
    {
        return view('parametres.utilisateurs.show', ['user' => $user]);
    }

    public function edit($user)
    {
        return view('parametres.utilisateurs.edit', ['user' => $user]);
    }
}
