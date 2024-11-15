// resources/js/components/CRMOpportunites.jsx

import React from 'react';

const CRMOpportunites = ({ opportunites }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Opportunités CRM</h2>
            <ul>
                {opportunites.length > 0 ? (
                    opportunites.map(opportunite => (
                        <li key={opportunite.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{opportunite.name}</h3>
                            <p>Valeur: {opportunite.value}€</p>
                            {/* Ajoutez d'autres informations opportunité si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucune opportunité trouvée.</p>
                )}
            </ul>
        </div>
    );
};

export default CRMOpportunites;
