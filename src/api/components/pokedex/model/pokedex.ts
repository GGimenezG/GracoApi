import { basicAuth } from "../../../Models/basicAuth";

class Pokedex extends basicAuth {
    id: number;
    // idBathrooms: number;
    name?: string;
    image?: string;
    type?: string;
    height?: number;
    weight?: number;
    url?: number;
    estado: number;

    constructor(){
        super();
        this.id = 0;
        this.name = '';
        this.image = '';
        this.type = '';
        this.height = 0;
        this.weight = 0;
        this.url = 0;
        this.estado = 0;
    }
}

export { Pokedex }