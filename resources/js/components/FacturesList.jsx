import React from 'react';

const FacturesList = ({ factures }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Liste des Factures</h2>
            <ul>
                {factures.length > 0 ? (
                    factures.map(f => (
                        <li key={f.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{f.title}</h3>
                            <p>Montant: {f.amount}€</p>
                            {/* Ajoutez d'autres informations facture si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucune facture trouvée.</p>
                )}
            </ul>
        </div>
    );
};

export default FacturesList;
