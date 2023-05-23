export default class Empresa {
    #id;
    #nombre;
    #rut;
    #importaciones = [];

    constructor(id, nombre, rut){
        this.#id = id;
        this.#nombre = nombre;
        this.#rut = rut;
    }

    agregarImportaciones(importaciones){
        for (const importacion of importaciones) {
            this.#importaciones.push(importacion);
        }
    }

    sumaTotalImportaciones(){
        let total = this.#importaciones.length;
        return "Total de importaciones: " + total;
    }

    calcularValorTotalImportaciones(){   
        let sumaTotal = 0
        let retorno=[];
        for (const importacion of this.#importaciones) {
            let valor = importacion.getPrecio * importacion.getCantidad;
            sumaTotal += valor;
            retorno.push(`La importacion de '${importacion.getProducto}' tiene una cantidad de ${importacion.getCantidad} unidades y un valor unitario de $ ${importacion.getPrecio} pesos. Dando un total de: ${valor} pesos.`);
        }
        retorno.push(`Valor total importaciones: ${sumaTotal} pesos`);
        return retorno;
    }

    get getId(){
        return this.#id;
    }

    get getNombre(){
        return this.#nombre;
    }

    get getRut(){
        return this.#rut;
    }

    get getImportaciones(){
        return this.#importaciones;
    }

    set setId(id){
        this.#id = id;
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    set setRut(rut){
        this.#rut = rut;
    }
}