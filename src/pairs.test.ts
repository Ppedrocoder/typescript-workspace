import { Pairs } from "./pairs";

test('Catch the pairs elements from the array [8, 3, 9, 5, 6, 12]', () => {
  expect(Pairs([8, 3, 9, 5, 6, 12])).toStrictEqual([8, 6, 12]);
});