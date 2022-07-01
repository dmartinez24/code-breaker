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
});
