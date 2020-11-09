import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonService } from './pokemon.service';

@Injectable({
    providedIn: 'root'
})
export class TransformDataService {

    constructor( ) {}

    transformListPokemon(data: any): any[] {
        const list = [];

        if (data.length === 0) {
            return list;
        }
        let aux = {};

        data.forEach((element: any) => {
            aux = {
                id: this.getId(element.url),
                name: element.name
            };
            list.push(aux);
        });
        return list;
    }

    private getId(text: string): number {
        const aux = text.split('/');
        return parseInt(aux[aux.length - 2], 10);
    }

    transformDataPokemon(data: any): PokemonModel {
        let pokemon = new PokemonModel();

        pokemon = {
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            id: data.id,
            name: data.name,
            type: this.transformTypes(data.types),
            height: data.height,
            weight: data.weight,
            description: ''
        };

        return pokemon;
    }

    /**
     * Transforma el arreglo de tipo de pokemon
     */
    private transformTypes(types: any[]): string[] {
        const listTypes = [];
        if (types.length === 0) {
            return ['unknown'];
        }


        types.forEach((element: any) => {
            listTypes.push(element.type.name);
        });

        return listTypes;
    }
}
