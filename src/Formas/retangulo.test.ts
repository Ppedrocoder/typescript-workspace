import {retangulo} from "./retangulo";

test('Calculate the area of a rectangle with base 5 and height 3', () => {
  expect(retangulo(5, 3)).toBe(15);
});

test('Calculate the perimeter of a rectangle with base 5 and height 3', () => {
  expect(retangulo(5, 3)).toBe(16);
});