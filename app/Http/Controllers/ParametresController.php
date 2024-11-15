<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ParametresController extends Controller
{
    public function config()
    {
        return view('parametres.config');
    }

    public function update(Request $request)
    {
        // Logique de mise à jour des paramètres
        // Puis redirection ou réponse appropriée
        return redirect()->route('parametres.config')->with('success', 'Paramètres mis à jour avec succès.');
    }
}
