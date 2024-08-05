import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobSearchComponent } from 'src/components/job-search/job-search.component';
import { ExcelTableComponent } from 'src/components/excel-table/excel-table.component';
import { ConnexionComponent } from 'src/components/connexion/connexion.component';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'job-search', component: JobSearchComponent },
  { path: 'ecxel-table', component: ExcelTableComponent },
  { path: 'connexion', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
