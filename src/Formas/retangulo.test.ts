import {Retangulo} from "./retangulo";

test('Calculate the area of a rectangle with base 5 and height 3', () => {
  const retangulo = new Retangulo(5, 3);
  expect(retangulo.calcularArea()).toBe(15);
});

test('Calculate the perimeter of a rectangle with base 5 and height 3', () => {
  const retangulo = new Retangulo(5, 3);
  expect(retangulo.calcularPerimetro()).toBe(16);
});