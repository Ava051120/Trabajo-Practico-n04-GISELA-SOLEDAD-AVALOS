var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


console.log("Los Meses con 31 días:");
for (let index = 0; index < meses.length; index++) 
{
  if (diasDelMes[index] == 31) {
    console.log(meses[index]);
  }
}

 
console.log("Los Meses con 28 días:");
for (let index = 0; index < meses.length; index++)
 {
  if (diasDelMes[index] == 28) {
    console.log(meses[index]);
  }
}

 
console.log("Los Meses con 30 días:");
for (let index = 0; index < meses.length; index++) {
  if (diasDelMes[index] == 30) {
    console.log(meses[index]);
  }
}
