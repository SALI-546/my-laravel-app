import React from 'react';

const DevisEdit = ({ devi }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Modifier le Devis</h2>
            {/* Formulaire de modification du devis */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Titre</label>
                    <input type="text" defaultValue={devi.title} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Montant</label>
                    <input type="number" defaultValue={devi.amount} className="w-full p-2 border rounded" />
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Enregistrer les Modifications</button>
            </form>
        </div>
    );
};

export default DevisEdit;
