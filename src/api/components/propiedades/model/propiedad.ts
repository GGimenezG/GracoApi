import { basicAuth } from "../../../Models/basicAuth";

class Propiedad extends basicAuth {
    id: number;
    // idBathrooms: number;
    precio: number;
    metroscuadrados: number;
    baños: number;
    habitaciones: number;
    antiguedad: Date;
    estado: number;
    tipo: number

    constructor(){
        super();
        this.id = 0;
        this.precio = 0;
        this.metroscuadrados = 0;
        this.baños = 0;
        this.habitaciones = 0;
        this.antiguedad = new Date();
        this.tipo = 0;
        this.estado = 0;
    }
}

export { Propiedad }