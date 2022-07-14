let carro1 = {
  marca: "Toyota",
  tipo: "Sedan",
  puertas: 3,
};

class carro {
  constructor(marca1, tipo1, puertas) {
    this.marca1 = marca1;
    this.tipo1 = tipo1;
    this.puertas = puertas;

    this.encendido = false;
    this.gasolina = 100;
  }

  encenderCarro() {
    if (this.encendido) {
      console.log("El carro estaba encendido");
    } else {
      this.encendido = true;
      console.log("EL carro esta encendiendo");
    }
    return this;
  }

  realizarViaje(consumo) {
    if (this.encendido) {
      if (consumo > this.gasolina) {
        console.log(
          "No puedo realizar el viaje por falta de gasolina" + this.gasolina
        );
      } else {
        this.gasolina = this.gasolina - consumo;
        return "le queda " + this.gasolina;
      }
    } else {
      console.log("EL carro esta apagado");
    }
  }
}

console.log(carro);
