import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input() searchData!: any[];
  searchQuery: string = '';
  filteredData: any[] = [];
  searchResultMessage: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  performSearch() {
    if (!this.searchQuery.trim()) return;

    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      this.searchQuery
    )}`;
    this.searchEvent.emit(this.searchQuery);
    this.searchQuery = '';
  }

  onInputChange() {
    this.searchResultMessage = '';
    console.log(this.searchQuery);
  }
}
