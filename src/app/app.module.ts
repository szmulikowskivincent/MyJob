import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSearchComponent } from '../components/job-search/job-search.component';
import { ExcelTableComponent } from '../components/excel-table/excel-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ConnexionComponent } from '../components/connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    ExcelTableComponent,
    NavigationComponent,
    FooterComponent,
    ConnexionComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
