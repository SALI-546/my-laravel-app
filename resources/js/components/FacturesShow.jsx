import React from 'react';

const FacturesShow = ({ facture }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails de la Facture</h2>
            <h3 className="text-xl font-semibold">{facture.title}</h3>
            <p>Montant Total: {facture.amount}€</p>
            {/* Ajoutez d'autres détails de la facture si nécessaire */}
        </div>
    );
};

export default FacturesShow;
