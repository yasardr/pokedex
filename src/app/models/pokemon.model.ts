export class PokemonModel {

    image: string;
    id: number;
    name: string;
    type: string[];
    height: string;
    weight: string;
    description: string;

    constructor() {
        this.image = '';
        this.id = 0;
        this.name = '';
        this.type = [];
        this.height = '';
        this.weight = '';
        this.description = '';
    }
}
