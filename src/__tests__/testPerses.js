import Pers from '../js/perses';

test('sort health perses error', () => {
  expect(() => new Pers('Человек', 101)).toThrowError('incorrect health value');
});

test('health of perses >= 0 and <= 100', () => {
  const pers = new Pers('Человек', 50);
  expect(pers.health).toBe(50);
});
