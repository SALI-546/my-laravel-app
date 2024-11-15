<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Facture; // Assurez-vous que le modèle Facture existe

class FactureController extends Controller
{
    public function index()
    {
        $factures = Facture::all();
        return view('factures.index', compact('factures'));
    }

    public function create()
    {
        return view('factures.create');
    }

    public function store(Request $request)
    {
        // Validation et création de la facture
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'amount' => 'required|numeric',
            // Ajoutez d'autres champs si nécessaire
        ]);

        Facture::create($validated);

        return redirect()->route('factures.index')->with('success', 'Facture créée avec succès.');
    }

    public function show(Facture $facture)
    {
        return view('factures.show', compact('facture'));
    }

    public function edit(Facture $facture)
    {
        return view('factures.edit', compact('facture'));
    }

    public function update(Request $request, Facture $facture)
    {
        // Validation et mise à jour de la facture
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'amount' => 'required|numeric',
            // Ajoutez d'autres champs si nécessaire
        ]);

        $facture->update($validated);

        return redirect()->route('factures.index')->with('success', 'Facture mise à jour avec succès.');
    }

    public function destroy(Facture $facture)
    {
        $facture->delete();

        return redirect()->route('factures.index')->with('success', 'Facture supprimée avec succès.');
    }
}
