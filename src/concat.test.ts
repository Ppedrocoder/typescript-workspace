import { concatenar } from "./concat";

test('Concatenate "[‘Arrays’, ‘com’, ‘TypeScript’]"', () => {
  expect(concatenar(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
});