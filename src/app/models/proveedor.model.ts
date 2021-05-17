export class Proveedor {
    nombre: string;
    cif: string; 
    //...
    constructor(nombre: string, cif: string) {
        this.nombre = nombre;
        this.cif = cif;
    }

    getNombre() {
        return this.nombre;
    }

    getCif() {
        return this.cif;
    }

    //..
}