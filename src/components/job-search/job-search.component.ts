import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/services/localStore-service/local-storage.service';

interface SearchResult {
  title: string;
  snippet: string;
  link: string;
}

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
})
export class JobSearchComponent {
  jobSearchForm: FormGroup;
  searchQuery!: string;
  searchResults!: SearchResult[];

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {
    this.jobSearchForm = this.fb.group({
      companyName: ['', Validators.required],
      submissionDate: ['', Validators.required],
      sector: ['', Validators.required],
      employerResponseDate: ['', Validators.required],
      pdfUrl: ['', Validators.required],
      searchType: ['', Validators.required],
      referenceNumber: ['', Validators.required],
      employerEmail: ['', [Validators.required, Validators.email]],
      contactPerson: ['', Validators.required],
      phoneNumber: [''],
      searchTypeNote: ['', Validators.required] 
      
    });
  }

  onSubmit() {
    if (this.jobSearchForm.valid) {
      const formData = this.jobSearchForm.value;
      this.localStorageService.addFormData(formData);
      console.log('Données sauvegardées dans le local storage:', formData);
      alert('Données sauvegardées dans le local storage');
    } else {
      console.error("Le formulaire n'est pas valide");
      alert('Formulaire non valide');
    }
  }
}
