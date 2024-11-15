// resources/js/components/CRMInteractions.jsx

import React from 'react';

const CRMInteractions = ({ interactions }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Interactions CRM</h2>
            <ul>
                {interactions.length > 0 ? (
                    interactions.map(interaction => (
                        <li key={interaction.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{interaction.type}</h3>
                            <p>Date: {interaction.date}</p>
                            <p>Description: {interaction.description}</p>
                            {/* Ajoutez d'autres informations interaction si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucune interaction trouvée.</p>
                )}
            </ul>
        </div>
    );
};

export default CRMInteractions;
