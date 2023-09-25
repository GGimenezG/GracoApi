import { basicAuth } from "../../../Models/basicAuth";

class Tramite extends basicAuth {
    propiedad: number;
    correo: string;
    nombre: string;
    telefono: string;
    transaccion: number;
    
    // idBathrooms: number;
   

    constructor(){
        super();
        this.propiedad = 0;
        this.correo ='';
        this.nombre='';
        this.telefono='';
        this.transaccion=0;
    }
}

export { Tramite }