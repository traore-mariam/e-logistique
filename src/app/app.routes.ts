import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./shared/components/dashboard-layout/dashboard-layout')
        .then(m => m.DashboardLayout)
  },

  {
    path: 'produits',
    loadComponent: () =>
      import('./features/gestionnaire/produits/produit-list/produit-list')
        .then(m => m.ProduitList)
  },

  {
    path: 'produit-form',
    loadComponent: () =>
      import('./features/gestionnaire/produits/produit-form/produit-form')
        .then(m => m.ProduitForm)
  },

  {
    path: 'livraisons',
    loadComponent: () =>
      import('./features/transporteur/livraisons/livraisons')
        .then(m => m.Livraisons)
  },

  {
    path: 'map',
    loadComponent: () =>
      import('./features/transporteur/map-tracking/map-tracking')
        .then(m => m.MapTracking)
  }

];