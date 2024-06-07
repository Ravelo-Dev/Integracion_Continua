const Hola_Mundo = require("./HolaMundo");

test('Debe devolver "Hola Mundo, Marcos M. Ravelo 2022-1947"', () => {
    expect(Hola_Mundo()).toBe("Hola Mundo, Marcos M. Ravelo 2022-1947");
});