import {quadrado, quadrado2} from "./square";

test('Tranforme [3,5,7,3,8,9,1] to [9,25,49,9,64,81,1]', () => {
  expect(quadrado([3,5,7,3,8,9,1])).toBe([9,25,49,9,64,81,1]);
});

test('Tranforme [3,5,7,3,8,9,1] to [9,25,49,9,64,81,1] with forEach', () => {
  expect(quadrado2([3,5,7,3,8,9,1])).toBe([9,25,49,9,64,81,1]);
});