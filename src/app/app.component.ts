import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchData: any[] = [
    {
      id: 1,
      name: 'Reference Number',
      property: 'numéro de réfèrence offre emploi',
    },
    { id: 2, name: 'Company Name', property: 'nom de la sociétè' },
    { id: 3, name: 'Employer Email', property: 'adresse email entreprise' },
  ];
  filteredData!: any[];
  router: any;
  searchQuery: any;
  searchEvent: any;

  performSearch() {
    if (!this.searchData) return;

    this.filteredData = this.searchData.filter((item: any) => {
      return item.property
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });

    this.searchEvent.emit(this.searchQuery);
    this.searchQuery = '';

    console.log('Résultat de la recherche :', this.filteredData);

    this.router.navigate(['/excel-table']);
  }
}
