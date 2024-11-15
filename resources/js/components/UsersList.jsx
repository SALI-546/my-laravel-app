import React from 'react';

const UsersList = ({ users }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Liste des Utilisateurs</h2>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Rôle: {user.role}</p>
                            {/* Ajoutez d'autres informations utilisateur si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucun utilisateur trouvé.</p>
                )}
            </ul>
        </div>
    );
};

export default UsersList;
