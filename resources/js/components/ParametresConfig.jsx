import React from 'react';

const ParametresConfig = ({ config }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Paramètres de l'Application</h2>
            {/* Formulaire de configuration des paramètres */}
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom de l'Application</label>
                    <input type="text" defaultValue={config.app_name} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Adresse Email de Contact</label>
                    <input type="email" defaultValue={config.contact_email} className="w-full p-2 border rounded" />
                </div>
                {/* Ajoutez d'autres champs de paramètres si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">Enregistrer</button>
            </form>
        </div>
    );
};

export default ParametresConfig;
