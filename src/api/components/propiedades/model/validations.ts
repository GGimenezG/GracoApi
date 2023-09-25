import { basicAuthValidator } from "../../../Models/basicAuthValidator";

class VisitarValidator extends basicAuthValidator {
    // idBathrooms: string;
    propiedad: string;
    constructor(){
        super();
        // this.idBathrooms = 'numeric';
        this.propiedad = 'numeric';
    }
}


class TramitarValidator extends basicAuthValidator {
    // idBathrooms: string;
    propiedad: string;
    nombre: string;
    correo: string;
    telefono: string;
    transaccion: string;
    constructor(){
        super();
        this.propiedad = 'numeric';
        this.nombre = 'required|string';
        this.correo = 'required|email';
        this.telefono = 'required|string';
        this.transaccion = 'required|string';
    }
}



export { VisitarValidator, TramitarValidator }