import React from 'react';

const CRMClients = ({ clients }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Clients</h2>
            <ul>
                {clients.length > 0 ? (
                    clients.map(client => (
                        <li key={client.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{client.name}</h3>
                            <p>Email: {client.email}</p>
                            {/* Ajoutez d'autres informations client si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucun client trouvé.</p>
                )}
            </ul>
        </div>
    );
};

export default CRMClients;
