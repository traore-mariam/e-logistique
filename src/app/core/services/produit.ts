import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class Produit {

  private apiUrl = "http://localhost:8080/api/produits";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  create(produit: Produit) {
    return this.http.post<Produit>(this.apiUrl, produit);
  }

  update(id: number, produit: Produit) {
    return this.http.put(`${this.apiUrl}/${id}`, produit);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
