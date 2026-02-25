import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/core/services/livraison.service';
import { Livraison } from 'src/app/shared/models/livraison.model';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html'
})
export class Livraisons implements OnInit {

  livraisons: Livraison[] = [];

  constructor(private livraisonService: LivraisonService) {}

  ngOnInit() {
    this.loadLivraisons();
  }

  loadLivraisons() {
    this.livraisonService.getMesLivraisons().subscribe(data => {
      this.livraisons = data;
    });
  }

  changerStatut(livraison: Livraison, statut: string) {
    this.livraisonService.updateStatut(livraison.id, statut)
      .subscribe(() => {
        this.loadLivraisons();
      });
  }
}
