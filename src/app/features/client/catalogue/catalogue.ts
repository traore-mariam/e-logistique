import { Component, Inject, OnInit } from '@angular/core';
import { Produit } from '../../../shared/shared-module';
import { Produit } from '../../../core/services/produit';
// Update the path below if 'produit.service
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.html',
  styleUrls: ['./catalogue.scss'],
})
export class Catalogue  implements OnInit {

  produits: Produit[] = [];
  panier: any[] = [];

  constructor(@Inject(Produit) private produit: Produit) {}

  ngOnInit() {
    this.produit.getAll().subscribe((data: Produit[]) => {
      this.produits = data;
    });
  }

  ajouterAuPanier(produit: Produit) {
    this.panier.push({
      produitId: produit.id,
      quantite: 1
    });
  }
}