<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Créer les permissions
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'manage services']);
        // Ajouter d'autres permissions nécessaires

        // Créer les rôles et assigner les permissions
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo(['manage users', 'manage services']);

        $user = Role::create(['name' => 'user']);
        // Assign permissions au rôle 'user' si nécessaire
    }
}
