import { Quadrado } from "./quadrado";

test('Calculate the area of a square with side 5', () => {
  const quadrado = new Quadrado(5);
  expect(quadrado.calcularArea()).toBe(25);
});

test('Calculate the perimeter of a square with side 5', () => {
  const quadrado = new Quadrado(5);
  expect(quadrado.calcularPerimetro()).toBe(20);
});