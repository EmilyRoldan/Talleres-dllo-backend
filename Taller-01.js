//Punto #1
function convertidorTemp(tempC) {
  const tempF = tempC * (9 / 5) + 32;
  return tempF;
}

const tempC = 30;
const tempF = convertidorTemp(tempC);
console.log("Punto #1")
console.log(`La temperatura en Fahrenheit es: ${tempF}`);
console.log("")

//Punto #2
function resolvedor(a, b, c, signo) {
  let discriminante = b ** 2 - 4 * a * c;
  let resultado;
  if (discriminante > 0) {
    if (signo == 1) {
      // 1 --> valor positivo
      resultado = (-b+Math.sqrt(discriminante)) / (2 * a);
      return resultado
    } else if (signo == 0) {
      //0  --> valor negativo
      resultado = (-b-Math.sqrt(discriminante)) / (2 * a);
      return resultado
    } else {
      // cualquier otro numero --> signo invalido
      return "Inválido";
    }
  } else {
    return "No se puede resolver porque el discriminante es negativo";
  }
}

const a = 1,
  b = 5,
  c = 4,
  signo = 1;

console.log("Punto #2")
console.log(resolvedor(a, b, c, signo));
console.log("")

//Punto #3
function mejorParidad(numero) {
  return numero % 2 === 0;
}


const numero = 3;
let resultado = mejorParidad(numero);
console.log("Punto #3")
console.log("Par:" + resultado);
console.log("")

//Punto #4

function peorParidad(numero) {
  numero = numero / 2;
  if (!Number.isInteger(numero)) {
    //numero decimal
    numero_ = numero.toString(); //convertir a string
    numeroArray = numero_.split("."); //split
    if (numeroArray[1] == 5) {
      // la parte decimal de todo numero impar divido entre 2 es 0.5
      return "Impar";
    }
  } else {
    return "Par";
  }
}

const num = 3;
let result = peorParidad(num);
console.log("Punto #4")
console.log(result);