function ordenar(arr) {
    const nuevoArray = [...arr];
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[i] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[i];
                nuevoArray[i] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

console.log(ordenar([14, 23, 99, 874, 93, 12]));

function esPar (numero)  {
    return numero % 2 === 0;
}

console.log(esPar(4));

function calculaDiasCrecimiento (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) {
            return dias;
        }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}
console.log(calculaDiasCrecimiento(3, 2, 10));