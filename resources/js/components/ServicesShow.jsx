import React from 'react';

const ServicesShow = ({ service }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails du Service/Pack</h2>
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p>Prix: {service.price}€</p>
            {/* Ajoutez d'autres détails du service si nécessaire */}
        </div>
    );
};

export default ServicesShow;
