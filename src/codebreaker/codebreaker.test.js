import Codebreaker from "./codebreaker";

describe("Codebreaker logica", () => {
  it("indica que gane cuando adivino el codigo secreto", () => {
    const cb = new Codebreaker("5");
    const mensaje = cb.adivinar("5");
    expect(mensaje).toEqual("Ganaste!");
  });

  it("genera un codigo secreto random", () => {
    const cb = new Codebreaker("");

    expect(cb.codigo).toEqual("1234");
  });

  it("recibe un codigo secreto", () => {
    const cb = new Codebreaker("8976");

    expect(cb.codigo).toEqual("8976");
  });

  it("contiene 2 numeros", () => {
    const cb = new Codebreaker("");
    const msg = cb.adivinar("1200");

    expect(msg).toEqual("Contiene 2!");
  });

  it("contiene 3 numeros", () => {
    const cb = new Codebreaker("");
    const msg = cb.adivinar("1230");

    expect(msg).toEqual("Contiene 3!");
  });

  it("contiene 4 numeros", () => {
    const cb = new Codebreaker("");
    const msg = cb.adivinar("4321");

    expect(msg).toEqual("Contiene 4!");
  });
});
