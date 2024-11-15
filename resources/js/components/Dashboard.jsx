import React from 'react';

const Dashboard = ({ stats }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-nextmux-green mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">Chiffre d'affaires</h3>
                    <p className="text-2xl">{stats.chiffreAffaires}€</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">Projets en cours</h3>
                    <p className="text-2xl">{stats.projetsEnCours}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">Nouveaux clients</h3>
                    <p className="text-2xl">{stats.nouveauxClients}</p>
                </div>
            </div>
            {/* Intégrer des graphiques avec une bibliothèque comme Chart.js ou Recharts */}
        </div>
    );
};

export default Dashboard;
