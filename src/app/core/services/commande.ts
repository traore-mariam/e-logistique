import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../../shared/models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class Commande {

  private readonly apiUrl = 'http://localhost:8080/api/commandes';

  constructor(private http: HttpClient) {}

  create(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(this.apiUrl, commande);
  }

  getMyCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/mes-commandes`);
  }
}