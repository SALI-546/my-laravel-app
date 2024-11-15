import React from 'react';

const ProjetsList = ({ projets }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Liste des Projets</h2>
            <ul>
                {projets.length > 0 ? (
                    projets.map(projet => (
                        <li key={projet.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{projet.name}</h3>
                            <p>Status: {projet.status}</p>
                            {/* Ajoutez d'autres informations projet si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucun projet trouvé.</p>
                )}
            </ul>
        </div>
    );
};

export default ProjetsList;
