import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { TransformDataService } from '../../services/transformData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list = [];

  constructor( private router: Router,
               private pokemonService: PokemonService,
               private transformDataService: TransformDataService ) {
    this.pokemonService.getPokemones()
        .subscribe(data => {
          this.list = this.transformDataService.transformListPokemon(data);
        });
  }

  ngOnInit(): void {
  }

  getPokemon(id: number): void {
    this.router.navigate(['/pokemon', id]);
  }

  urlImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

}
