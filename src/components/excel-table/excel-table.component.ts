import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/localStore-service/local-storage.service';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data-service/data.service';

@Component({
  selector: 'app-excel-table',
  templateUrl: './excel-table.component.html',
  styleUrls: ['./excel-table.component.css'],
})
export class ExcelTableComponent implements OnInit {
  formData: any[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.formData = this.localStorageService.getFormData() || [];
  }

  encoderDonnees() {
    this.router.navigate(['/job-search']);
    console.log('Encodage des données');
  }

  telechargerDonneesEnCSV(): void {
    const fileName = 'formData';
    this.dataService.telechargerDonneesEnCSV(this.formData, fileName);
  }

  allerSurLeSiteDuForem() {
    window.location.href = 'https://www.leforem.be/';
  }

  allerSurLinkkedin() {
    window.location.href =
      'https://www.linkedin.com/in/vincent-szmulikowski-122881151/';
  }

  allerSurHotmail() {
    window.location.href = 'https://outlook.live.com/mail/0/';
  }

  allerSurGmail() {
    window.location.href = 'https://mail.google.com/mail/u/0/?hl=fr#inbox';
  }

  updateData(index: number) {
    console.log("Mise à jour des données pour l'index :", index);
  }

  deleteData(index: number) {
    this.formData.splice(index, 1);
    this.localStorageService.setFormData(this.formData);
    console.log("Données supprimées pour l'index :", index);
  }

  openModal() {
    const modal = document.getElementById('myModal');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal !== null) {
      modal.style.display = 'none';
    }
  }
}
