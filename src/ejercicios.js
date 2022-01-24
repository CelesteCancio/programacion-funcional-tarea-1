export function multiplicarPor10(array) {
    return array.map (numero => numero * 10);
}

export function soloPares(array) {
    return array.filter (numero => numero % 2 == 0);
}

export function moverALaDerecha(array) {
    return [...(array.slice(array.length-1)),...(array.slice(0,array.length-1))];
}

export function soloUnaPalabra(array) {
    return array.filter(string => !string.includes(" "));
}

export function soloArraysPositivos(array) {
    return array.filter(subArray => subArray.every(number => number>0));
}

export function soloVocales(array) {
    const vowels = "aeiouAEIOU";
    return array.filter(letra => vowels.includes(letra));
}

export function todasVocalesIguales(array) {}

export function duplicarMatriz(array) {
    return array.map(subArray => subArray.map(numero => numero*2));
}


export function mayoresDeEdadValidados(array) {
    //Se puede hacer todo en la linea del return con ternario?
        
    function devolverObjetoValidado (objeto){
        if (objeto.edad>18){
            return {...objeto, mayor:true};
        } 
        else{
            return {...objeto, mayor:false};
        }        
    }
    return array.map(devolverObjetoValidado);

    //Esta opcion devuelve solo [true,true,false,true]
    // return arrayValidado = array.map(objeto => objeto.edad>=18 ? objeto.mayor=true : objeto.mayor=false);
}

export function transformarObjetoEnArray(objeto) {}
