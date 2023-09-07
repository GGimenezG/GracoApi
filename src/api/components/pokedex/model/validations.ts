import { basicAuthValidator } from "../../../Models/basicAuthValidator";

class PokedexValidator extends basicAuthValidator {
    // idBathrooms: string;
    estado: string;
    id: string;
    constructor(){
        super();
        // this.idBathrooms = 'numeric';
        this.estado = 'numeric';
        this.id = 'numeric';
    }
}

export { PokedexValidator }