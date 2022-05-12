function potencia(base, exponente) {
  let potencia = 1;
  let localBase;
  if (base < 0) {
    localBase = base * -1;
  } else {
    localBase = base;
  }
  for (let i = 1; i <= exponente; i++) {
    potencia = potencia * localBase;
  }
  if (base < 0) {
    potencia = potencia * -1;
  }
  console.log(`${base} elevado a ${exponente} = ${potencia}`);
  return potencia;
}

function sumatoria(n, X) {
  let suma = 0;
  for (let i = 0; i <= n; i++) {
    suma = suma + potencia(X, i);
  }
  console.log("la sumatoria es ", suma);
  alert(`La sumatoria de la potencia desde 0 a ${n} es ${suma}`);
}

function resolver() {
  // bandera para validar los datos ingresados
  let seguir = false;
  // valores a usar para resolver la sumaria
  let n, X;
  do {
    n = parseInt(prompt('Ingresa un valor entero para "n"'));
    X = parseInt(prompt('Ingresa un valor entero para "X"'));
    if (isNaN(n) || isNaN(X)) {
      alert("Error: Valores invalidos");
      seguir = true;
    } else {
      if (n > 100) {
        alert("Error: n es un valor muy grande");
        seguir = true;
      } else {
        if (n <= 0) {
          alert("Error: n debe ser mayor que 0");
          seguir = true;
        } else {
          seguir = false;
        }
      }
    }
  } while (seguir);
  sumatoria(n, X);
}
