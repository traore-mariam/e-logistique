import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitForm } from './produit-form';
import { Component } from '@angular/core';
import { ProduitService } from 'src/app/core/services/produit.service';
import { Router } from '@angular/router';

describe('ProduitForm', () => {
  let component: ProduitForm;
  let fixture: ComponentFixture<ProduitForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class ProduitForm {

  produit = {
    nom: '',
    description: '',
    prix: 0,
    quantite: 0
  };

  constructor(private produitService: ProduitService,
              private router: Router) {}

  save() {
    this.produitService.create(this.produit).subscribe(() => {
      this.router.navigate(['/gestionnaire']);
    });
  }
}