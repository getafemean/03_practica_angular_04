export class Proveedor {
    private nombre: string;
    private cif: string; 
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