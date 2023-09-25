import { basicAuth } from "../../../Models/basicAuth";

class Visita extends basicAuth {
    propiedad: number;
    
    // idBathrooms: number;
   

    constructor(){
        super();
        this.propiedad = 0;
    }
}

export { Visita }