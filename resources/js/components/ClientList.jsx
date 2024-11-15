// resources/js/components/ClientList.jsx

import React from 'react';

const ClientList = ({ clients }) => {
    return (
        <div>
            <h2>Liste des Clients</h2>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>{client.name} - {client.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
