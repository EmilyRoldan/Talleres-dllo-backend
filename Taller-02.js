function findMax(lista) {
  let mayor = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
  }
  return mayor;
}

function includes(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return true;
    }
  }
  return false;
}

function sum(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

function ordenar(lista) {
  var done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < lista.length; i++) {
      if (lista[i - 1] > lista[i]) {
        // si la posicion anterior es mayor a la posicion
        // que estoy viendo [9, 4], estoy viendo 4 y el 9 es el anterior
        done = false;
        let tmp = lista[i - 1]; // guardo el 9
        lista[i - 1] = lista[i]; // ahora seria 4, 4
        lista[i] = tmp; // ahora es 4, 9
      }
    }
  }
  return lista;
}

function missingNumbers(lista) {
  lista = ordenar(lista);
  let listanueva = [];
  let elementocero = lista[0];

  for (let i = 0; i < lista.length - 1; i++) {
    if (lista[i + 1] == elementocero + 1) {
      elementocero = lista[i + 1];
    } else {
      listanueva.push(elementocero + 1);
      elementocero = lista[i + 1];
    }
  }
  return listanueva;
}


