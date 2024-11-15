import React from 'react';

const ProjetsCreate = ({ services }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Créer un Projet</h2>
            {/* Formulaire de création de projet */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom du Projet</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Service/Pack</label>
                    <select className="w-full p-2 border rounded">
                        <option value="">-- Sélectionner un Service/Pack --</option>
                        {services.map(service => (
                            <option key={service.id} value={service.id}>{service.name} - {service.price}€</option>
                        ))}
                    </select>
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Créer</button>
            </form>
        </div>
    );
};

export default ProjetsCreate;
