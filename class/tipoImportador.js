import Empresa from './Empresa.js';

class TipoImportador extends Empresa{
    #rubro;
    #tamano;

    constructor(id, nombre, rut, rubro, tamano){
        super(id, nombre, rut);
        this.#rubro = rubro;
        this.#tamano = tamano;
    }

    get rubro(){
        return this.#rubro;
    }

    get tamano(){
        return this.#tamano;
    }

    set rubro(rubro){
        this.#rubro = rubro;
    }

    set tamano(tamano){
        this.#tamano = tamano;
    }
}

export default TipoImportador;