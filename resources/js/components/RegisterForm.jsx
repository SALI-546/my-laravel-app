import React from 'react';

const RegisterForm = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Créer un Compte</h2>
            {/* Formulaire d'inscription */}
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
                    <label className="block text-gray-700">Mot de Passe</label>
                    <input type="password" className="w-full p-2 border rounded" />
                </div>
                {/* Ajoutez d'autres champs si nécessaire */}
                <button type="submit" className="bg-nextmux-green text-white px-4 py-2 rounded">S'inscrire</button>
            </form>
        </div>
    );
};

export default RegisterForm;
