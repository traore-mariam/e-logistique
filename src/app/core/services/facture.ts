import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class Facture {

  genererFacture(commande: any) {

    const doc = new jsPDF();

    // Titre
    doc.setFontSize(18);
    doc.text('FACTURE - E-LOGISTIQUE', 14, 20);

    // Infos commande
    doc.setFontSize(12);
    doc.text(`Commande ID: ${commande.id}`, 14, 35);
    doc.text(`Date: ${commande.date}`, 14, 42);
    doc.text(`Statut: ${commande.statut}`, 14, 49);

    // Tableau produits
    autoTable(doc, {
      startY: 60,
      head: [['Produit', 'Quantité', 'Prix', 'Total']],
      body: commande.lignes.map((l: any) => [
        l.nomProduit,
        l.quantite,
        l.prix,
        l.quantite * l.prix
      ])
    });

    // Total général
    const total = commande.lignes.reduce(
      (sum: number, l: any) => sum + l.quantite * l.prix,
      0
    );

    doc.text(`Total: ${total} FCFA`, 14, (doc as any).lastAutoTable.finalY + 10);

    // Télécharger
    doc.save(`facture_commande_${commande.id}.pdf`);
  }
}