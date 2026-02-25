import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/core/services/produit.service';
import { Produit } from 'src/app/shared/models/produit.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html'
})
export class ProduitList implements OnInit {

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit() {
    this.loadProduits();
  }

  loadProduits() {
    this.produitService.getAll().subscribe(data => {
      this.produits = data;
    });
  }

  deleteProduit(id: number) {
    this.produitService.delete(id).subscribe(() => {
      this.loadProduits();
    });
  }
}
