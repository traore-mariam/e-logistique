import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from 'src/app/shared/models/paiement.model';

@Injectable({
  providedIn: 'root'
})
export class Paiement {

  private apiUrl = "http://localhost:8080/api/paiements";

  constructor(private http: HttpClient) {}

  payer(paiement: Paiement) {
    return this.http.post(this.apiUrl, paiement);
  }
}
