export default class Codebreaker {
  constructor(codigo) {
    if (codigo == "") {
      this.codigo = "1234";
      return;
    }

    this.codigo = codigo;
  }

  adivinar(numero) {
    if (numero == this.codigo) {
      return "Ganaste!";
    }

    return "Perdiste!";
  }
}
