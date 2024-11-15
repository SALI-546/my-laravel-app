import React from 'react';

const ServicesEdit = ({ service }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Modifier le Service/Pack</h2>
            {/* Formulaire de modification du service ou pack */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom du Service/Pack</label>
                    <input type="text" defaultValue={service.name} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Prix</label>
                    <input type="number" defaultValue={service.price} className="w-full p-2 border rounded" />
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Enregistrer les Modifications</button>
            </form>
        </div>
    );
};

export default ServicesEdit;
