import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livraison } from 'src/app/shared/models/livraison.model';
@Injectable({
  providedIn: 'root',
})
export class Livraison {
    private apiUrl = "http://localhost:8080/api/livraisons";

  constructor(private http: HttpClient) {}

  getMesLivraisons() {
    return this.http.get<Livraison[]>(`${this.apiUrl}/mes-livraisons`);
  }

  updateStatut(id: number, statut: string) {
    return this.http.put(`${this.apiUrl}/${id}/statut`, { statut });
  }
}
export interface Livraison {
  id: number;
  commandeId: number;
  adresse: string;
  statut: string;
  dateLivraison?: Date;
}
