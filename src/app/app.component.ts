import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex-kalos-xy';
  oculto  = false;
  option = '';

  action(text: string): void {
    /*if (text === 'prev') {
      this.activatedRouter.params.subscribe(params => {
        this.pokemonService.getPokemonId(params[`id`])
            .subscribe(data => {
              this.pokemon = this.transformDataService.transformDataPokemon(data);
              this.getDescription(this.pokemon.id);
              setTimeout(() => {
                this.loading = false;
              }, 1000);
            });
      });
    } else {

    }*/
  }
}
