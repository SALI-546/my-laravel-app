import React, { useState } from 'react';

const DragDropDevis = ({ services, onUpdate }) => {
    const [selectedServices, setSelectedServices] = useState(services);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedServices = Array.from(selectedServices);
        const [movedService] = reorderedServices.splice(result.source.index, 1);
        reorderedServices.splice(result.destination.index, 0, movedService);

        setSelectedServices(reorderedServices);
        onUpdate(reorderedServices);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Devis - Drag & Drop</h2>
            {/* Implémentez la fonctionnalité drag & drop ici */}
            <p>Drag & Drop de services à implémenter.</p>
        </div>
    );
};

export default DragDropDevis;
