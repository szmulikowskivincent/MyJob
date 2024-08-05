import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  telechargerDonneesEnCSV(formData: any[], fileName: string): void {
    const csvData = this.convertToCSV(formData);
    const blob = new Blob([csvData], { type: 'text/csv' });

    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName + '.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }

  private convertToCSV(data: any[]): string {
    const csvArray = [];
    const header = Object.keys(data[0]);
    csvArray.push(header.join(','));

    data.forEach((item) => {
      const values = header.map((field) => this.escapeCSVValue(item[field]));
      csvArray.push(values.join(','));
    });

    return csvArray.join('\n');
  }

  private escapeCSVValue(value: string): string {
    if (typeof value === 'string' && value.includes(',')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
}
