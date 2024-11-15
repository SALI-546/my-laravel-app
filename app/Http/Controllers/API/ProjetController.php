<?php

// app/Http/Controllers/API/ProjetController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projet;

class ProjetController extends Controller
{
    public function index()
    {
        $projets = Projet::all();
        return response()->json($projets);
      
    }
    // Autres méthodes API si nécessaires
}
