import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TransformDataService {
    constructor() {}

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

    private getId(text: string): string {
        const aux = text.split('/');
        return aux[aux.length - 2];
    }
}
