import React from 'react';

const UsersShow = ({ user }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails de l'Utilisateur</h2>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Rôle: {user.role}</p>
            {/* Ajoutez d'autres informations utilisateur si nécessaire */}
        </div>
    );
};

export default UsersShow;
