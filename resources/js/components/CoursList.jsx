import React from 'react';

const CoursList = ({ cours }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Liste des Cours</h2>
            <ul>
                {cours.length > 0 ? (
                    cours.map(cour => (
                        <li key={cour.id} className="bg-white p-4 rounded shadow mb-2">
                            <h3 className="text-xl font-semibold">{cour.title}</h3>
                            <p>Durée: {cour.duration} heures</p>
                            {/* Ajoutez d'autres informations cours si nécessaire */}
                        </li>
                    ))
                ) : (
                    <p>Aucun cours trouvé.</p>
                )}
            </ul>
        </div>
    );
};

export default CoursList;
