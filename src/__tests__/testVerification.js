import verificateHealth from '../js/verificate';

test.each([
  ['healthy', 60, 'greenyellow'],
  ['wounded', 25, 'yellow'],
  ['critical', 4, 'red'],
  ['dead', 0, 'white'],
])('testing verification function %s is %i', (status, health, color) => {
  const result = verificateHealth({ health });
  expect(result).toEqual({ color, status });
});

test('null Test', () => {
  const result = verificateHealth(-2);
  expect(result).toBe(null);
});
