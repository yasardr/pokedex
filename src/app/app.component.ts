import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex-kalos-xy';
  oculto  = false;
  option = '';

  constructor( private location: Location,
               private router: Router ) { }

  /**
   * Determina si avanza o regresa de pokemon
   */
  action(text: string): void {
    const path = this.location.path();
    const aux = path.split('/');
    if (aux[1] === 'home') {
      return;
    }

    let id = parseInt(aux[aux.length - 1], 10);
    if (text === 'prev') {
      id -= 1;
      if (id === 0) {
        return;
      }
      this.router.navigate(['/pokemon', id]);
    } else {
      id += 1;
      if (id > 893) {
        return;
      }
      this.router.navigate(['/pokemon', id]);
    }
  }
}
