<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CRMController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\FactureController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ParametresController;
use App\Http\Controllers\ProfilController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Ici, vous pouvez enregistrer les routes web pour votre application. Ces
| routes sont chargées par le RouteServiceProvider et attribuées au groupe
| de middleware "web".
|
*/

// Redirection de la route racine vers le Dashboard
Route::get('/', function () {
    return redirect()->route('dashboard');
});

// Dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

// CRM
Route::prefix('crm')->name('crm.')->group(function () {
    Route::get('/clients', [CRMController::class, 'clients'])->name('clients');
    Route::get('/opportunites', [CRMController::class, 'opportunites'])->name('opportunites');
    Route::get('/interactions', [CRMController::class, 'interactions'])->name('interactions');
});

// Devis
Route::prefix('devis')->name('devis.')->group(function () {
    Route::get('/', [DevisController::class, 'index'])->name('index');
    Route::get('/create', [DevisController::class, 'create'])->name('create');
    Route::get('/{devi}', [DevisController::class, 'show'])->name('show');
    Route::get('/{devi}/edit', [DevisController::class, 'edit'])->name('edit');
    // Ajoutez les routes POST, PUT/PATCH, DELETE si nécessaire
});

// Factures
Route::prefix('factures')->name('factures.')->group(function () {
    Route::get('/', [FactureController::class, 'index'])->name('index');
    Route::get('/create', [FactureController::class, 'create'])->name('create');
    Route::get('/{facture}', [FactureController::class, 'show'])->name('show');
    Route::get('/{facture}/edit', [FactureController::class, 'edit'])->name('edit');
    // Ajoutez les routes POST, PUT/PATCH, DELETE si nécessaire
});

// Services & Packs
Route::prefix('services')->name('services.')->group(function () {
    Route::get('/', [ServiceController::class, 'index'])->name('index');
    Route::get('/create', [ServiceController::class, 'create'])->name('create');
    Route::get('/{service}', [ServiceController::class, 'show'])->name('show');
    Route::get('/{service}/edit', [ServiceController::class, 'edit'])->name('edit');
    // Ajoutez les routes POST, PUT/PATCH, DELETE si nécessaire
});

// Projets & Services
Route::prefix('projets')->name('projets.')->group(function () {
    Route::get('/', [ProjetController::class, 'index'])->name('index');
    Route::get('/create', [ProjetController::class, 'create'])->name('create');
    Route::get('/{projet}', [ProjetController::class, 'show'])->name('show');
    Route::get('/{projet}/edit', [ProjetController::class, 'edit'])->name('edit');
    // Ajoutez les routes POST, PUT/PATCH, DELETE si nécessaire
});

// Formation
Route::prefix('formation')->name('formation.')->group(function () {
    Route::get('/cours', [CoursController::class, 'index'])->name('cours.index');
    Route::get('/cours/create', [CoursController::class, 'create'])->name('cours.create');
    Route::get('/cours/{cours}', [CoursController::class, 'show'])->name('cours.show');
    Route::get('/cours/{cours}/edit', [CoursController::class, 'edit'])->name('cours.edit');
    // Ajoutez les routes POST, PUT/PATCH, DELETE si nécessaire
});

// Paramètres et Administration
Route::prefix('parametres')->name('parametres.')->group(function () {
    // Gestion des Utilisateurs
    Route::get('/utilisateurs', [UserController::class, 'index'])->name('utilisateurs.index');
    Route::get('/utilisateurs/create', [UserController::class, 'create'])->name('utilisateurs.create');
    Route::get('/utilisateurs/{utilisateur}', [UserController::class, 'show'])->name('utilisateurs.show');
    Route::get('/utilisateurs/{utilisateur}/edit', [UserController::class, 'edit'])->name('utilisateurs.edit');
    // Ajoutez les routes POST, PUT/PATCH, DELETE si nécessaire

    // Gestion des Paramètres de l'Application
    Route::get('/config', [ParametresController::class, 'config'])->name('config');
    Route::post('/config', [ParametresController::class, 'update'])->name('config.update');
});

// Profil de l'Utilisateur
Route::prefix('profil')->name('profil.')->group(function () {
    Route::get('/edit', [ProfilController::class, 'edit'])->name('edit');
    Route::post('/update', [ProfilController::class, 'update'])->name('update');
});
