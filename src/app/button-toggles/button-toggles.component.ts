import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.scss']
})
export class ButtonTogglesComponent {

  constructor(private router: Router) {}

  goToAllMoviesPage() {
    this.router.navigate(['/'])
  }

  goToFavoriteMoviesPage() {
    this.router.navigate(['/favorite'])
  }

}
