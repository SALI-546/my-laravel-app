import React from 'react';

const UsersCreate = ({ roles }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Créer un Utilisateur</h2>
            {/* Formulaire de création d'utilisateur */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rôle</label>
                    <select className="w-full p-2 border rounded">
                        <option value="">-- Sélectionner un Rôle --</option>
                        {roles.map(role => (
                            <option key={role.id} value={role.id}>{role.name}</option>
                        ))}
                    </select>
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Créer</button>
            </form>
        </div>
    );
};

export default UsersCreate;
