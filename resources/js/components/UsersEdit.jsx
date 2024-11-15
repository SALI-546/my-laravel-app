import React from 'react';

const UsersEdit = ({ user }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Modifier l'Utilisateur</h2>
            {/* Formulaire de modification de l'utilisateur */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom</label>
                    <input type="text" defaultValue={user.name} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" defaultValue={user.email} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rôle</label>
                    <select defaultValue={user.role} className="w-full p-2 border rounded">
                        <option value="Admin">Admin</option>
                        <option value="Utilisateur">Utilisateur</option>
                        {/* Ajoutez d'autres rôles si nécessaire */}
                    </select>
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Enregistrer les Modifications</button>
            </form>
        </div>
    );
};

export default UsersEdit;
