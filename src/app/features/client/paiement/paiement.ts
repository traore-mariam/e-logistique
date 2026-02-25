import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Paiement } from '../../../core/services/paiement';

@Component({
  selector: 'app-paiement',
  imports: [],
  templateUrl: './paiement.html',
  styleUrl: './paiement.scss',
  providers: [Paiement]
})
export class Paiement {

  paiement = {
    commandeId: 1,
    montant: 0,
    methode: 'WAVE'
  };

  loading = false;
  success = false;

  constructor(@Inject(Paiement) private paiement: Paiement,
              private router: Router) {}

  payer() {
    this.loading = true;

    this.paiement.payer(this.paiement).subscribe(() => {
      this.loading = false;
      this.success = true;

      setTimeout(() => {
        this.router.navigate(['/client/commandes']);
      }, 2000);
    });
  }
}
