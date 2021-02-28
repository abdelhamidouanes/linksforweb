import { Realisation } from './../Models/Realisation.model';
import { Subject } from 'rxjs';

export class RealisationService  {

    private realisations: Realisation[] = [
        new Realisation('Salon de beauté', 'Site web dynamique avec un front-office et un back-office. Il inclut la gestion des clients, la gestion des rendez-vous et la gestion des produits et des services.', 'salondecoiffure2.jpg', 'Salon de coiffure pour homme', 'salondecoiffure', ['Site web dynamique', 'Un front-office et un back-office', 'la gestion des clients,la gestion des rendez-vous,la gestion des produits et des services'], false),
        new Realisation('Agence immobilière', 'Site web dynamique avec un front-office et un back-office. Il inclut la gestion des clients, la gestion des rendez-vous, la gestion des commerciaux, la gestion des immobiliers, un générateur de cotenu et la gestion des relations avec la clientèle (CRM).', 'immo1.jpg', 'Un villa à Sidi bou said', 'immo', ['Site web dynamique', 'Un front-office et un back-office', 'gestion des clients,gestion des rendez-vous,gestion des commerciaux,gestion des immobiliers,générateur de cotenu,gestion des relations avec la clientèle (CRM).'], false),
        new Realisation('Restaurant', 'Site web vitrine avec un front-office seulement. Il inclut une présentation du restaurant, chefs et plats, un menu numérique.', 'restaurant5.jpg', 'Service dans un restaurant', 'restaurant', ['Site web vitrine', 'Un front-office seulement', 'présentation du restaurant, présentation des chefs,  présentation des plats, un menu numérique'], false),
        new Realisation('Boutique de prêt à porter', 'Site web dynamique avec un front-office et un back-office. Il inclut la gestion des clients, la gestion des produits et un panier virtuelle.', 'pretaporter3.jpg', 'Prêt à porter pour homme', 'pretaporter', ['Site web dynamique', 'Un front-office et un back-office', 'gestion des clients,gestion des produits,panier virtuelle' ], false)
    ];
    realisationSubject = new Subject<Realisation[]>();

    emitRealisations(): void{
        this.realisationSubject.next(this.realisations.slice());
    }
}
