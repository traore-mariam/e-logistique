import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../../../core/services/commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.html',
  styleUrls: ['./panier.scss'],
})
export class Panier {
  panier = JSON.parse(localStorage.getItem('panier') || '[]');

  constructor(@Inject(Commande) private commande: Commande,
              private router: Router) {}

  passerCommande() {
    this.commande.create({
      lignes: this.panier
    }).subscribe(() => {
      localStorage.removeItem('panier');
      this.router.navigate(['/client/commandes']);
    });
  }
}