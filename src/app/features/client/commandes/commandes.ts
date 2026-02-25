import { Component, OnInit } from '@angular/core';
import { Commande } from '../../../core/services/commande';
import { Facture } from '../../../core/services/facture';


@Component({
  selector: 'app-commandes',
  imports: [],
  templateUrl: './commandes.html',
  styleUrl: './commandes.scss',
  providers: [Commande, Facture]
})
export class Commandes implements OnInit {

  commandes: Commande[] = [];

  constructor(
    private commande: Commande,
    private facture: Facture
  ) {}

  ngOnInit() {
    this.commande.getMyCommandes().subscribe(data => {
      this.commandes = data;
    });
  }

  telechargerFacture(commande: any) {
    this.facture.genererFacture(commande);
  }
}

export interface LigneCommande {
  produitId: number;
  quantite: number;
}

export interface Commande {
  id?: number;
  date?: Date;
  statut?: string;
  lignes: LigneCommande[];
}
// Removed duplicate constructor and method, now included in the class above.