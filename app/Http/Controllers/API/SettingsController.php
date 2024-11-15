<?php

// app/Http/Controllers/API/SettingsController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;

class SettingsController extends Controller
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'siteName' => 'required|string|max:255',
            'siteLogo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // Ajouter d'autres validations pour les paramètres
        ]);

        // Mettre à jour les paramètres
        Setting::updateOrCreate(
            ['key' => 'siteName'],
            ['value' => $validated['siteName']]
        );

        if ($request->hasFile('siteLogo')) {
            $path = $request->file('siteLogo')->store('logos', 'public');
            Setting::updateOrCreate(
                ['key' => 'siteLogo'],
                ['value' => $path]
            );
        }

        return response()->json(['message' => 'Paramètres mis à jour avec succès.']);
    }
}
