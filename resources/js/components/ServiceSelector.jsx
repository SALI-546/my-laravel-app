import React from 'react';

const ServiceSelector = ({ services, onAdd }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Sélecteur de Services</h2>
            <ul>
                {services.length > 0 ? (
                    services.map(service => (
                        <li key={service.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
                            <span>{service.name} - {service.price}€</span>
                            <button onClick={() => onAdd(service)} className="bg-nextmux-green text-white px-2 py-1 rounded">Ajouter</button>
                        </li>
                    ))
                ) : (
                    <p>Aucun service disponible.</p>
                )}
            </ul>
        </div>
    );
};

export default ServiceSelector;
