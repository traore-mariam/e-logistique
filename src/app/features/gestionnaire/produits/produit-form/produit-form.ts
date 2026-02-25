import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-produit-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './produit-form.html'
})
export class ProduitForm {

  produit = {
    description: '',
    prix: 0,
    quantite: 0
  };

  save() {
    console.log(this.produit);
  }
}