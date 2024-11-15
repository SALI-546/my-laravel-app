import React from 'react';

const ProfilShow = ({ user }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails du Profil</h2>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Rôle: {user.role}</p>
            {/* Ajoutez d'autres détails du profil si nécessaire */}
        </div>
    );
};

export default ProfilShow;
