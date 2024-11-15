<?php

// app/Http/Controllers/API/DevisController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Devis;

class DevisController extends Controller
{
    public function index()
    {
        $devis = Devis::with('client')->get();
        return response()->json($devis);
    }

    // Autres méthodes API si nécessaires
}

