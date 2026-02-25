import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  private apiUrl = 'http://localhost:8080/api/statistiques';

  constructor(private http: HttpClient) {}

  getGlobalStats() {
    return this.http.get<any>(`${this.apiUrl}/global`);
  }

  getCommandesParMois() {
    return this.http.get<any[]>(`${this.apiUrl}/commandes-par-mois`);
  }
}