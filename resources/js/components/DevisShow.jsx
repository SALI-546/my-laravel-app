import React from 'react';

const DevisShow = ({ devi }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails du Devis</h2>
            <h3 className="text-xl font-semibold">{devi.title}</h3>
            <p>Montant Total: {devi.amount}€</p>
            {/* Ajoutez d'autres détails du devis si nécessaire */}
        </div>
    );
};

export default DevisShow;
