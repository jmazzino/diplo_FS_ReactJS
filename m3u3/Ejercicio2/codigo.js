const numero1 = prompt('Ingrese 1 numero ', ''); 
const numero2 = prompt('Ingrese otro numero', ''); 
const numero3 = prompt('Ingrese un tercer numero', ''); 

const numeros = [numero1, numero2, numero3];

function obtenerMayorNumero(numeros) {
  if (numeros.length === 0) {
    return null;
  }
  return Math.max(...numeros);
}


const mayor = obtenerMayorNumero(numeros);
document.write("El número mayor es:", mayor);