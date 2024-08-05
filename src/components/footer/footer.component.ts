import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  searchData: any[] = [];
  filteredData: any[] = [];

  performSearch(event: any) {
    const searchQuery = (event && event.target && event.target.value) || '';
    this.filteredData = this.searchData.filter((item) => {
      return item.property.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
}
