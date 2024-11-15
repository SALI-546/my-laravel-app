<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nextmux</title>
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>

<body class="flex">

    <!-- Sidebar -->
    <aside class="bg-nextmux-green text-white w-64 min-h-screen p-4">
        <h2 class="text-2xl font-bold mb-8">Nextmux</h2>
        <nav>
            <ul>
                <li class="mb-4">
                    <a href="{{ route('dashboard') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Dashboard</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('crm.clients') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">CRM</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('devis.index') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Devis</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('factures.index') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Factures</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('services.index') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Services & Packs</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('projets.index') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Projets & Services</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('formation.cours.index') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Formation</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('parametres.utilisateurs.index') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Utilisateurs</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('parametres.config') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Paramètres</a>
                </li>
                <li class="mb-4">
                    <a href="{{ route('profil.edit') }}" class="block hover:bg-nextmux-green-dark p-2 rounded">Profil</a>
                </li>
            </ul>
        </nav>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
        <!-- Topbar -->
        <header class="bg-white border-b p-4 flex justify-between items-center">
            <div class="flex items-center">
                <img src="{{ asset('images/logo.png') }}" alt="Nextmux" class="h-8 mr-4">
                <span class="text-xl font-bold">Nextmux</span>
            </div>
            <div class="flex items-center">
              
                    @csrf
                    <button type="submit" class="bg-nextmux-green text-white px-4 py-2 rounded">Déconnexion</button>
                </form>
            </div>
        </header>

        <!-- Content -->
        <main class="p-6 flex-1 overflow-y-auto">
            @yield('content')
        </main>

        <!-- Footer -->
        <footer class="bg-gray-100 text-center py-2">
            &copy; {{ date('Y') }} Nextmux. Tous droits réservés.
        </footer>
    </div>

</body>

</html>
