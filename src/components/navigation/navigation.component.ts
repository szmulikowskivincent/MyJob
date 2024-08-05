import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  afficherDonnees() {
    this.router.navigate(['/ecxel-table']);
    console.log('Affichage des données');
  }

  connexion() {
    this.router.navigate(['/connexion']);
    console.log('Connexion');
  }

  encoderDonnees() {
    this.router.navigate(['/job-search']);
    console.log('Encodage des données');
  }
}
