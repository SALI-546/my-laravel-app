import React from 'react';

const ServicesList = ({ services }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Liste des Services & Packs</h2>
            <ul>
                {services.length > 0 ? (
                    services.map(service => (
                        <li key={service.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            <p>Prix: {service.price}€</p>
                            {/* Ajoutez d'autres informations service si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucun service trouvé.</p>
                )}
            </ul>
        </div>
    );
};

export default ServicesList;
