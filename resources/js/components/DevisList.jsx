import React from 'react';

const DevisList = ({ devis }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Liste des Devis</h2>
            <ul>
                {devis.length > 0 ? (
                    devis.map(d => (
                        <li key={d.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{d.title}</h3>
                            <p>Montant: {d.amount}€</p>
                            {/* Ajoutez d'autres informations devis si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucun devis trouvé.</p>
                )}
            </ul>
        </div>
    );
};

export default DevisList;
