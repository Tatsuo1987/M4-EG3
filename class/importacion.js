export default class Importacion {
    #id;
    #producto;
    #cantidad;
    #precio;

    constructor(id, producto, cantidad, precio){
        this.#id = id;
        this.#producto = producto;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }

    get getId(){
        return this.#id;
    }

    get getProducto(){
        return this.#producto;
    }

    get getCantidad(){
        return this.#cantidad;
    }

    get getPrecio(){
        return this.#precio;
    }

    set setId(id){
        this.#id = id;
    }

    set setProducto(producto){
        this.#producto = producto;
    }

    set setCantidad(cantidad){
        this.#cantidad = cantidad;
    }

    set setPrecio(precio){
        this.#precio = precio;
    }
}
