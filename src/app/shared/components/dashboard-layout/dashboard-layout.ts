import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

// Angular Material + Router
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

// ⚠️ adapte les chemins si nécessaire
// Update this import to match the actual export from '../sidebar/sidebar'
// For example, if the default export is used:
// Update the path below to match the actual location of SidebarComponent
import { Sidebar } from '../sidebar/sidebar';
// Or, if the export is named differently, use the correct name:
// import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';

import { Inject } from '@angular/core';
// Update the path below to the correct location of statistique.service
// Update the path below to the correct location of StatistiqueService
import { Statistique } from '../../services/statistique.';


@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    Sidebar,
    Navbar,
  ],
  providers: [Statistique],
  templateUrl: './dashboard-layout.html',
  styleUrls: ['./dashboard-layout.scss'],
})
export class DashboardLayout implements OnInit {

  totalProduits = 0;
  totalCommandes = 0;
  totalLivraisons = 0;
  revenuTotal = 0;

  constructor(@Inject(Statistique) private stat: Statistique) {}

  ngOnInit() {
    this.loadStats();
    this.loadChart();
  }

  loadStats() {
    this.stat.getGlobalStats().subscribe((data: { totalProduits: number; totalCommandes: number; totalLivraisons: number; revenuTotal: number; }) => {
      this.totalProduits = data.totalProduits;
      this.totalCommandes = data.totalCommandes;
      this.totalLivraisons = data.totalLivraisons;
      this.revenuTotal = data.revenuTotal;
    });
  }

  loadChart() {
    this.stat.getCommandesParMois().subscribe((data: any[]) => {
      const labels = data.map(d => d.mois);
      const values = data.map(d => d.total);

      new Chart('commandesChart', {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Commandes par mois',
            data: values
          }]
        }
      });
    });
  }
}
