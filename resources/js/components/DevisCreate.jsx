// resources/js/components/DevisCreate.jsx

import React, { useState } from 'react';
import ServiceSelector from './ServiceSelector'; // Assurez-vous que ce composant existe
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DevisCreate = ({ services }) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const handleAddService = (service) => {
        // Vérifier si le service est déjà sélectionné
        if (!selectedServices.find(s => s.id === service.id)) {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleRemoveService = (id) => {
        setSelectedServices(selectedServices.filter(service => service.id !== id));
    };

    const handleGeneratePDF = () => {
        const doc = new jsPDF();

        doc.text('Devis Nextmux', 14, 20);
        doc.autoTable({
            head: [['Nom du Service', 'Prix']],
            body: selectedServices.map(service => [service.name, `${service.price}€`]),
            startY: 30,
        });
        doc.save('devis.pdf');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de soumission du devis (envoi au backend)
        console.log('Devis créé avec les services suivants:', selectedServices);
        // Vous pouvez utiliser axios pour envoyer les données au backend
        // Exemple :
        // axios.post('/api/devis', { services: selectedServices })
        //     .then(response => { /* gérer la réponse */ })
        //     .catch(error => { /* gérer l'erreur */ });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Créer un Devis</h2>
            <ServiceSelector services={services} onAdd={handleAddService} />
            <h3 className="text-xl font-semibold mt-6 mb-2">Services Sélectionnés</h3>
            <ul>
                {selectedServices.length > 0 ? (
                    selectedServices.map(service => (
                        <li key={service.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
                            <span>{service.name} - {service.price}€</span>
                            <button
                                type="button"
                                onClick={() => handleRemoveService(service.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Retirer
                            </button>
                        </li>
                    ))
                ) : (
                    <p>Aucun service sélectionné.</p>
                )}
            </ul>
            <button
                onClick={handleGeneratePDF}
                className="bg-nextmux-green text-white px-4 py-2 rounded mt-4"
            >
                Télécharger PDF
            </button>
            <form onSubmit={handleSubmit} className="mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Soumettre le Devis
                </button>
            </form>
        </div>
    );
};

export default DevisCreate;
