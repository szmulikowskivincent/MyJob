import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobSearchService {
  jobSearchData: any[] = [];

  constructor() {
    const storedData = localStorage.getItem('jobSearchData');
    if (storedData) {
      this.jobSearchData = JSON.parse(storedData);
    }
  }

  addJobSearchData(data: any) {
    this.jobSearchData.push(data);
    this.saveData();
  }

  getJobSearchData() {
    return this.jobSearchData;
  }

  private saveData() {
    localStorage.setItem('jobSearchData', JSON.stringify(this.jobSearchData));
  }
}
