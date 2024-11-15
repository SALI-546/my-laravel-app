<?php

// app/Http/Controllers/API/CoursController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cours;

class CoursController extends Controller
{
    public function index()
    {
        $cours = Cours::all();
        return response()->json($cours);
    }

    // Autres méthodes API si nécessaires
}

