import { firstTwo } from "./firsttwo";

test('Catch the first two of the array [2,4,6,2,8,9,5]"', () => {
  expect(firstTwo([2,4,6,2,8,9,5])).toStrictEqual([2,4]);
});