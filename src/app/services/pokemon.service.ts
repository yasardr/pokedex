import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private urlAPI = 'https://pokeapi.co/api/v2/';

    constructor( private http: HttpClient) { }

    /**
     * Obtener lista de pokemones
     */
    getPokemones(): Observable<any> {
        return this.http.get(`${this.urlAPI}pokemon?limit=100&offset=0`)
                    .pipe( map(data => {
                        return data[`results`];
                    }) );
    }

    /**
     *  Obtener un pokemon dado su id
     */
    getPokemonId(id: number): Observable<any> {
        return this.http.get(`${this.urlAPI}pokemon/${id}`);
    }

    /**
     *  Obtener un pokemon dado su id
     */
    getPokemonName(name: string): Observable<any> {
        return this.http.get(`${this.urlAPI}pokemon/${name}`);
    }

    /**
     * Obtener la descripción del pokemon
     */
    getPokemonDescription(id: number): Observable<any> {
        return this.http.get(`${this.urlAPI}pokemon-species/${id}`)
                    .pipe( map(data => {
                        return data[`flavor_text_entries`];
                    }) );
    }
}
