//Calcular pagos en cuotas sobre un monto determinado
//Declaro las variables
let monto = 0;
let cuotas = 0;
let valorCuota = 0;

//Ciclo que pide el monto a financiar
while (monto <= 0) {
    monto = prompt("Ingrese el monto a financiar:");
}

//Ciclo que pide la cantidad de cuotas
while (cuotas <= 0) {
    cuotas = prompt("Ingrese la cantidad de cuotas en las que le gustaria abonar:");
}

//Función con condicional que calcula el monto de cada cuota
function calcularCuotas() {
    if (cuotas == 1) {
        valorCuota = monto;
    } else {
        valorCuota = monto / cuotas;
    }
    return valorCuota;
}

valorCuota = calcularCuotas(); //Llamo a la función

alert(`El monto a pagar en cada cuota es: $${valorCuota}`); //Muestro el monto 
