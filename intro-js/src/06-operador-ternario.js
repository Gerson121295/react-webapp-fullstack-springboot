
//Operador Ternario
// (Evalua condicion) ? Si_se_cumple_condicion : Si_no_se_cumple_condicion;
const average = 5.9;
//const status2 = (average >= 5.5) ? 'Aprobado' : 'Reprobado';
let status2 = '';
//status2 = (average >= 5.5) ? 'Aprobado' : 'Reprobado';
//console.log(`Resultado: ${status2}`);

//El operador ternario es igual que un if pero mas optimizado
if(average >= 5.5){
    status2 = 'Aprovado';
}else{
    status2 = 'Reprovado'
}
console.log(`Resultado: ${status2}`);

//Otro ejemplo de operador ternario
let max = 0;

const a = 5;
const b = 8;
const c = 13;
max = a > b ? a : b; 
max = max > c ? max : c; //si maximo contiene el valor del dato mayor de la linea anterior
console.log(max);




