import React from 'react';

const ProfilEdit = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Modifier le Profil</h2>
            {/* Formulaire de modification du profil */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                </div>
                {/* Ajoutez d'autres champs de profil si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Enregistrer</button>
            </form>
        </div>
    );
};

export default ProfilEdit;
