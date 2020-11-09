import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { TransformDataService } from '../../services/transformData.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  /*@Output() previousEvent = new EventEmitter<number>();
  this.previousEvent.emit(this.pokemon.id);*/

  pokemon = new PokemonModel();
  loading = true;

  constructor( private activatedRouter: ActivatedRoute,
               private pokemonService: PokemonService,
               private transformDataService: TransformDataService,
               private location: Location )
  {
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
  }

  ngOnInit(): void {
  }

  previous(): void {
    this.loading = true;
    let id = this.pokemon.id;
    id -= 1;
    if (id === 0) {
      this.loading = false;
      return;
    }
    this.location.replaceState(`/pokemon/${id}`);
    this.pokemonService.getPokemonId(id)
        .subscribe(data => {
          this.pokemon = this.transformDataService.transformDataPokemon(data);
          this.getDescription(this.pokemon.id);
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
  }

  next(): void {
    this.loading = true;
    let id = this.pokemon.id;
    id += 1;
    if (id > 893) {
      this.loading = false;
      return;
    }
    this.location.replaceState(`/pokemon/${id}`);
    this.pokemonService.getPokemonId(id)
        .subscribe(data => {
          this.pokemon = this.transformDataService.transformDataPokemon(data);
          this.getDescription(this.pokemon.id);
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
  }

  getDescription(id: number): void {
    this.pokemonService.getPokemonDescription(id)
            .subscribe(dataD => {
                if (dataD.length === 0) {
                    this.pokemon.description = 'No description';
                } else {
                    dataD.forEach((element: any) => {
                        if (element[`language`].name === 'en') {
                            if (this.pokemon.description === '') {
                              this.pokemon.description = element[`flavor_text`];
                            }
                        }
                    });
                }
            });
  }

}
