function multiplicarPor10(array) {
    return array.map (numero => numero * 10);
}
console.log(multiplicarPor10([45, 1, -10, 11, 250]));
const expected = [450, 10, -100, 110, 2500];

function soloPares(array) {
    return array.filter (numero => numero % 2 == 0);
}
console.log(soloPares([10, 15, 20, 25, 30, 35]));
//const expected = [10, 20, 30];

function moverALaDerecha(array) {
    return [...(array.slice(array.length-1)),...(array.slice(0,array.length-1))];
}
console.log(moverALaDerecha([{ name: "" }, 10, "left-side"]));
//const expected = ["left-side", { name: "" }, 10];

function soloUnaPalabra(array) {
    return array.filter(string => !string.includes(" "));
}
console.log(soloUnaPalabra(["return", "phrases", "with one word"]));
//const expected = ["return", "phrases"]

function soloArraysPositivos(array) {
    return array.filter(subArray => subArray.every(number => number>0));
}
console.log(soloArraysPositivos([
    [1, 10, -100],
    [2, -20, 200],
    [3, 30, 300]]));
//const expected = [[3, 30, 300]]

function soloVocales(array) {
    // const vowels = "aeiouAEIOU";
    // return array.filter(letra => vowels.includes(letra));
}
// console.log(soloVocales(["average", "exceptional", "amazing"]));
//const expected = ["aeae", "eeioa", "aai"];

function todasVocalesIguales(array) {
    //const vowels = "aeiouAEIOU";
    // function vocalesRepetidas (palabra){
    //     if(palabra.search(/[aeiouAEIOU]/) >=0){

    //     }
    // }
    
    //palabras con vocales, pero no necesariamente iguales:
    //return array.filter(palabra => palabra.search(/[aeiouAEIOU]/) >=0);   
    
}
//console.log(todasVocalesIguales(["cafe","try","casa","helado","jklmn"]));

function duplicarMatriz(array) {
    return array.map(subArray => subArray.map(numero => numero*2));
}
console.log(duplicarMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]));
//const expected = [
//     [2, 4, 6],
//     [8, 10, 12],
//     [14, 16, 18],
// ];

function mayoresDeEdadValidados(array) {
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
console.log(mayoresDeEdadValidados([
    { nombre: "Jorge", edad: 29 },
    { nombre: "Alicia", edad: 23 },
    { nombre: "Lucas", edad: 15 },
    { nombre: "Adriana", edad: 18 }
  ]));

//   const expected = [
//     { nombre: "Jorge", edad: 29, mayor: true },
//     { nombre: "Alicia", edad: 23, mayor: true },
//     { nombre: "Lucas", edad: 15, mayor: false },
//     { nombre: "Adriana", edad: 18, mayor: false },
//   ];

function transformarObjetoEnArray(objeto) {
    // const objetoKeys = Object.keys(objeto);
    // const objetoConId = {...objeto,id:objetoKeys};
    // return objetoConId;

    //const objetoConId = for

    // for (let key in objeto) {
    //     const objetoConId = {id:key,...objeto};
    // }

    // arrayKeys.forEach([])
    // return objetoArray[0];
    //return Object.keys(objeto);
}
// console.log(transformarObjetoEnArray({
//         ARS: { venta: 539.97, compra: 526.35, simbolo: "$" },
//         USD: { venta: 530.54, compra: 266.03, simbolo: "$" },
//         EUR: { venta: 587.42, compra: 782.48, simbolo: "€" },
//       }));

// const input = {
//     ARS: { venta: 539.97, compra: 526.35, simbolo: "$" },
//     USD: { venta: 530.54, compra: 266.03, simbolo: "$" },
//     EUR: { venta: 587.42, compra: 782.48, simbolo: "€" },
//   };
//   const expected = [
//     { id: "ARS", venta: 539.97, compra: 526.35, simbolo: "$" },
//     { id: "USD", venta: 530.54, compra: 266.03, simbolo: "$" },
//     { id: "EUR", venta: 587.42, compra: 782.48, simbolo: "€" },
//   ];