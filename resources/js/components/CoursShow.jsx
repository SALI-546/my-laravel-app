import React from 'react';

const CoursShow = ({ cour }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Détails du Cours</h2>
            <h3 className="text-xl font-semibold">{cour.title}</h3>
            <p>Durée: {cour.duration} heures</p>
            {/* Ajoutez d'autres détails du cours si nécessaire */}
        </div>
    );
};

export default CoursShow;
