import Empresa from "./class/empresa.js";
import Importacion from "./class/importacion.js";

import rubros from './data/rubros.js';
import tamannos from './data/tamannos.js';

// let importacion1 = new Importacion(0, "zapato1", 12, 12000);
// let importacion2 = new Importacion(1, "zapato2", 12, 12000);
// let empresa1 = new Empresa(0, "empresa1", "12222222k");

// empresa1.agregarImportaciones([importacion1, importacion2]);

var Empresas=[
    // empresa1,
];

document.addEventListener("DOMContentLoaded", function (e) {
    //ASIGNACION DE CLIC A CADA BOTON
    document.getElementById("inEmpresa").addEventListener("click",_inEmpresa);
    document.getElementById("inImportacion").addEventListener("click",_inImportacion);
    listarSelect();
    listarEmpresas();
});

const CreateElement=(E,P)=>{
    let O=document.createElement(E);P.appendChild(O);return O;
}

const listarSelect=()=>{
    let selRubro=document.getElementById("EMP_RUBRO");
    let selTamanno=document.getElementById("EMP_TAMANNO");
    for(const [key, value] of Object.entries(rubros)){
        let newOpt=CreateElement("option",selRubro);
        newOpt.textContent=value;
        newOpt.value=value;
    }
    for(const [key, value] of Object.entries(tamannos)){
        let newOpt=CreateElement("option",selTamanno);
        newOpt.textContent=value;
        newOpt.value=value;
    }
};

const _inEmpresa=()=>{
    let formEmpresa=document.querySelectorAll("#formEmpresa input");
    let empresa = new Empresa(
        formEmpresa[0].value,
        formEmpresa[1].value,
        formEmpresa[2].value
    );
    Empresas.push(empresa);

    formEmpresa[0].value=Empresas.length;

    let selEmpresas=document.getElementById("IMP_EMPRESA");
    selEmpresas.innerHTML="";
    
    for (const empresa of Empresas) {
        let newOpt=CreateElement("option",selEmpresas);
        newOpt.textContent=empresa.getNombre;
        newOpt.value=empresa.getId;
    }

    listarEmpresas();
}

const _inImportacion=()=>{
    let formImportacion=document.querySelectorAll("#formImportacion input");
    let selEmpresas=document.getElementById("IMP_EMPRESA");
    
    let importacion= new Importacion(
        Empresas[selEmpresas.value].getImportaciones.length,
        formImportacion[0].value,
        formImportacion[1].value,
        formImportacion[2].value
    );
    Empresas[selEmpresas.value].agregarImportaciones([importacion]);
    
    listarEmpresas();
}

const listarEmpresas=()=>{
    let listaEmpresas=document.getElementById("listaEmpresas");
    listaEmpresas.innerHTML="";

    Empresas.forEach((empresa,indx)=>{
        let titulo=CreateElement('h2',listaEmpresas);
            titulo.textContent=empresa.getNombre + " ";
        let boton=CreateElement('button',titulo);
            boton.classList.add("btn","btn-sm","btn-success");
            boton.textContent="Detalles";

            //modal
            boton.dataset.bsToggle = "modal";
            boton.dataset.bsTarget = "#detalle-modal";
            boton.dataset.id = empresa.getId;
            boton.addEventListener('click', DetallesImportaciones);

        let tabla=CreateElement("table",listaEmpresas);
            tabla.classList.add("table","table-sm","table-striped","table-condenced");

        let thead=CreateElement("thead",tabla);
        let fila=CreateElement('tr',thead);
        let id=CreateElement('th', fila);
        let producto=CreateElement('td', fila);
        let cantidad=CreateElement('td', fila);
        let precio=CreateElement('td', fila);
            
        id.textContent          ="# ID";
        producto.textContent    ="Producto";
        cantidad.textContent    ="Cantidad";
        precio.textContent      ="Precio";

        let tbody=CreateElement("tbody",tabla);
        
        empresa.getImportaciones.forEach((importacion,i)=>{
            let fila=CreateElement('tr',tbody);
            let id=CreateElement('th', fila);
            let producto=CreateElement('td', fila);
            let cantidad=CreateElement('td', fila);
            let precio=CreateElement('td', fila);
            
            id.textContent=importacion.getId;
            producto.textContent=importacion.getProducto;
            cantidad.textContent=importacion.getCantidad;
            precio.textContent=importacion.getPrecio;
        })
        
    })
}

const DetallesImportaciones = (event) => {
    let currEmpresa=event.target.dataset.id;

    let modalBodyElem = document.querySelector(".modal-body");
    modalBodyElem.innerHTML = "";
    let modalBody = CreateElement("p", modalBodyElem);
    
    if(Empresas[currEmpresa].getImportaciones.length < 1){ 
        modalBody.textContent = `Esta Empresa no tiene Importaciones.`;
        console.log(`Esta Empresa no tiene Importaciones.`);   
    }else{
        let importaciones = Empresas[currEmpresa].getImportaciones;
        let totalValorImportaciones = 0;
        
        for (const importacion of importaciones) {
            totalValorImportaciones += importacion.getCantidad * importacion.getPrecio;
        }
    
        modalBody.textContent = `El valor total de las importaciones de la empresa ${Empresas[0].getNombre.toUpperCase()} es: ${totalValorImportaciones} pesos.`;
        console.log(`El valor total de las importaciones de la empresa ${Empresas[0].getNombre.toUpperCase()} es: ${totalValorImportaciones} pesos.`);   
    }
}