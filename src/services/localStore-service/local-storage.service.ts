import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setFormData: any;
  constructor() {}

  getFormData(): any[] {
    const formDataString = localStorage.getItem('jobSearchFormData');
    if (formDataString) {
      return JSON.parse(formDataString);
    }
    return [];
  }

  addFormData(newFormData: any): void {
    let formData = this.getFormData();
    if (!Array.isArray(formData)) {
      formData = [];
    }
    formData.push(newFormData);
    localStorage.setItem('jobSearchFormData', JSON.stringify(formData));
  }
}
