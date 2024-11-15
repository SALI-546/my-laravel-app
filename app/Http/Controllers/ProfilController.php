<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function edit()
    {
        return view('profil.edit');
    }

    public function update(Request $request)
    {
        // Logique de mise à jour du profil utilisateur
        // Puis redirection ou réponse appropriée
        return redirect()->route('profil.edit')->with('success', 'Profil mis à jour avec succès.');
    }

    public function show()
    {
        return view('profil.show');
    }
}
