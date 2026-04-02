import { sortDesc } from "./sortdesc";

test('Sort array in descending order', () => {
  expect(sortDesc(['carro', 'boneco', 'ave', 'lapis'])).toStrictEqual(['lapis', 'carro', 'boneco', 'ave']);
});