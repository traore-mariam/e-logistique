import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransporteurRoutingModule { }
export interface Livraison {
  id: number;
  commandeId: number;
  adresse: string;
  statut: string;
  dateLivraison?: Date;
}
