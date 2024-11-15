import React from 'react';

const ProjetsShow = ({ projet }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails du Projet</h2>
            <h3 className="text-xl font-semibold">{projet.name}</h3>
            <p>Status: {projet.status}</p>
            {/* Ajoutez d'autres détails du projet si nécessaire */}
        </div>
    );
};

export default ProjetsShow;
