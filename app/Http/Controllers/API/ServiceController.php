<?php

// app/Http/Controllers/API/ServiceController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return response()->json($services);
       
    }

    // Autres méthodes API si nécessaires
}
