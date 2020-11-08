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

    /*getPokemon(id: number): Observable<any> {
        return this.http.get(`${this.urlAPI}pokemon?limit=100&offset=0`)
                    .pipe( map(data => {
                        return data[`results`];
                    }) );
    }*/
}
