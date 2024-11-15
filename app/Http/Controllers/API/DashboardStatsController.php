<?php


// app/Http/Controllers/API/DashboardStatsController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Facture;
use App\Models\Projet;
use App\Models\Client;

class DashboardStatsController extends Controller
{
    public function index()
    {
        $chiffreAffaires = Facture::where('statut', 'payée')->sum('montant');
        $projetsEnCours = Projet::where('statut', 'en cours')->count();
        $nouveauxClients = Client::where('created_at', '>=', now()->subMonth())->count();

        return response()->json([
            'chiffreAffaires' => $chiffreAffaires,
            'projetsEnCours' => $projetsEnCours,
            'nouveauxClients' => $nouveauxClients
        ]);
    }
}
