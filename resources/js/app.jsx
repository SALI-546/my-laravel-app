import React from 'react';
import ReactDOM from 'react-dom/client';

// Import des composants
import Dashboard from './components/Dashboard';
import CRMClients from './components/CRMClients';
import CRMOpportunites from './components/CRMOpportunites';
import CRMInteractions from './components/CRMInteractions';
import DevisList from './components/DevisList';
import DevisCreate from './components/DevisCreate';
import DevisShow from './components/DevisShow';
import DevisEdit from './components/DevisEdit';
import FacturesList from './components/FacturesList';
import FacturesCreate from './components/FacturesCreate';
import FacturesShow from './components/FacturesShow';
import FacturesEdit from './components/FacturesEdit';
import ServicesList from './components/ServicesList';
import ServicesCreate from './components/ServicesCreate';
import ServicesShow from './components/ServicesShow';
import ServicesEdit from './components/ServicesEdit';
import ProjetsList from './components/ProjetsList';
import ProjetsCreate from './components/ProjetsCreate';
import ProjetsShow from './components/ProjetsShow';
import ProjetsEdit from './components/ProjetsEdit';
import CoursList from './components/CoursList';
import CoursCreate from './components/CoursCreate';
import CoursShow from './components/CoursShow';
import CoursEdit from './components/CoursEdit';
import UsersList from './components/UsersList';
import UsersShow from './components/UsersShow';
import UsersEdit from './components/UsersEdit';
import ParametresConfig from './components/ParametresConfig';
import ProfilEdit from './components/ProfilEdit';
import ProfilShow from './components/ProfilShow';

// Fonction pour monter les composants React
const mountReactComponent = (elementId, Component) => {
    const rootElement = document.getElementById(elementId);
    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <Component />
            </React.StrictMode>
        );
    }
};

// Monter les composants si les éléments correspondants existent
mountReactComponent('dashboard-root', Dashboard);
mountReactComponent('crm-clients-root', CRMClients);
mountReactComponent('crm-opportunites-root', CRMOpportunites);
mountReactComponent('crm-interactions-root', CRMInteractions);
mountReactComponent('devis-list-root', DevisList);
mountReactComponent('devis-create-root', DevisCreate);
mountReactComponent('devis-show-root', DevisShow);
mountReactComponent('devis-edit-root', DevisEdit);
mountReactComponent('factures-list-root', FacturesList);
mountReactComponent('factures-create-root', FacturesCreate);
mountReactComponent('factures-show-root', FacturesShow);
mountReactComponent('factures-edit-root', FacturesEdit);
mountReactComponent('services-list-root', ServicesList);
mountReactComponent('services-create-root', ServicesCreate);
mountReactComponent('services-show-root', ServicesShow);
mountReactComponent('services-edit-root', ServicesEdit);
mountReactComponent('projets-list-root', ProjetsList);
mountReactComponent('projets-create-root', ProjetsCreate);
mountReactComponent('projets-show-root', ProjetsShow);
mountReactComponent('projets-edit-root', ProjetsEdit);
mountReactComponent('cours-list-root', CoursList);
mountReactComponent('cours-create-root', CoursCreate);
mountReactComponent('cours-show-root', CoursShow);
mountReactComponent('cours-edit-root', CoursEdit);
mountReactComponent('users-list-root', UsersList);
mountReactComponent('users-show-root', UsersShow);
mountReactComponent('users-edit-root', UsersEdit);
mountReactComponent('parametres-config-root', ParametresConfig);
mountReactComponent('profil-edit-root', ProfilEdit);
mountReactComponent('profil-show-root', ProfilShow);
