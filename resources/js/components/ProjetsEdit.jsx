import React from 'react';

const ProjetsEdit = ({ projet }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Modifier le Projet</h2>
            {/* Formulaire de modification du projet */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom du Projet</label>
                    <input type="text" defaultValue={projet.name} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Status</label>
                    <select defaultValue={projet.status} className="w-full p-2 border rounded">
                        <option value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                        <option value="En attente">En attente</option>
                    </select>
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Enregistrer les Modifications</button>
            </form>
        </div>
    );
};

export default ProjetsEdit;
