import Empresa from './Empresa.js';

class TipoImportador extends Empresa{
    #rubro;
    #tamano;

    constructor(rubro, tamano){
        super();
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