
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let newArr = [];
    for(let i = 0; i<array.length; i++){
        let aux = 0;
        if(array[i]<9){
            aux = array[i]
            newArr.unshift(aux)
        }
    }
    return newArr
    
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let commonNumber = null;
    let aux = array1[0];

    for(let i =0; i<array1.length; i++){
        console.log(aux)
        if (array1[i]<aux){
            aux = array1[i]
        }
        for(let j=0; j<array2.length; j++){
            if (array2[j]<aux){
                aux = array2[j]
            }
            if(array2[j]===array1[i]){
                commonNumber = array2[j]
            }
        }
    }
    if (commonNumber === null){
        return aux
    }
    return commonNumber
};


function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    
    let newArr = [];
    for(let i=0; i<array.length; i++){
        if(Array.isArray(array[i])){
            let acc = 0;
            for(let j=0; j<array[i].length; j++){
                acc += array[i][j]
            }
            newArr.push(acc);
        }else{
            newArr.push(array[i])
        }
    }
    return newArr;   
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    let newArr = [];
    let division = numero/divisor
    if( division%1 !== 0) return false
    else {
        for(let i=0; i<divisor; i++){
            newArr.push(division)
        }
    }
    return newArr;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    // let newArr = [];
    let max = array[0]
    let min = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]>max) max = array[i]
        if(array[i]<min) min = array[i]
    }
    return [min, max]
    // newArr.push(min)
    // newArr.push(max)
    // return newArr
};

// function replicate(times, number){
//     if(times <= 0)return []
//     return [number, ...replicate(times-1, number)]
// }
// let array = [1,2,3,4,5]
// let array2 = [...array]
// console.log(array2)


module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};