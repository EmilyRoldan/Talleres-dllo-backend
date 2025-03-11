function desglosarString(string, tipo) {
  const vocales = ["a", "e", "i", "o", "u"];
  const letras = string.split(""); //separando cada caracter y guardandolo en un array
  if (tipo === "vocales") {
    let contadorVocales = 0;

    for (let letra of letras) {
      if (vocales.includes(letra)) {
        contadorVocales++;
      }
    }
    return contadorVocales;
  } else if (tipo === "consonantes") {
    let contadorConsonantes = 0;

    for (let letra of letras) {
      if (!vocales.includes(letra)) {
        contadorConsonantes++;
      }
    }
    return contadorConsonantes;
  }
}

function twoSum(numeros, resultado) {
  for (let i = 0; i < numeros.length; i++) {
    //operando1 vendria siendo numeros[i]
    let operando2 = resultado - numeros[i]; //numero que necesitamos encontrar

    let j = numeros.findIndex(function (num, index) {
      return num === operando2 && index !== i;
    });

    if (j !== -1) { //indice valido
      return [i, j];
    }
  }
}


function conversionRomana(romano) {
    const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        let actual = valores[romano[i]];
        let siguiente = valores[romano[i + 1]];

        //verificando que siguiente no sea undefined y que actual sea mayor o menor que siguiente
        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }

    return total;
}

