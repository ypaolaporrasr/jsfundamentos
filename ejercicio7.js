//Realizar una funcion que reciba 3 argumentos//
function max(a, b, c) {
  let mayor;

  if (a > b) {
    if (a > c) {
      mayor = a;
    } else {
      mayor = c;
    }
  } else {
    if (b > c) {
      mayor = b;
    } else {
      mayor = c;
    }
  }

  return mayor;
}

let mayor = max(8, 100, 1);

console.log(mayor); // 6
