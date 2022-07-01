export default class Codebreaker {
  constructor(codigo) {
    if (codigo == "") {
      this.codigo = "1234";
      return;
    }

    this.codigo = codigo;
  }

  adivinar(numero) {
    const cdg = this.codigo.split("");
    let count = 0;

    if (numero == this.codigo) {
      return "Ganaste!";
    }

    if (cdg.includes(numero[0])) {
      count++;
    }

    if (cdg.includes(numero[1])) {
      count++;
    }

    if (cdg.includes(numero[2])) {
      count++;
    }

    if (cdg.includes(numero[3])) {
      count++;
    }

    if (count > 0) {
      return `Contiene ${count}!`;
    }

    return "Perdiste!";
  }
}
