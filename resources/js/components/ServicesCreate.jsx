import React from 'react';

const ServicesCreate = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Créer un Service ou Pack</h2>
            {/* Formulaire de création de service ou pack */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom du Service/Pack</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Prix</label>
                    <input type="number" className="w-full p-2 border rounded" />
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Créer</button>
            </form>
        </div>
    );
};

export default ServicesCreate;
