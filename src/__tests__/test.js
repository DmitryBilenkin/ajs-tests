import verificateHealth from '../js/app';

test.each([
  ['healthy', 60, 'greenyellow'],
  ['wounded', 25, 'yellow'],
  ['critical', 4, 'red'],
  ['dead', 0, 'white'],
])('testing verification function $s is $h', (status, health, color) => {
  const result = verificateHealth({ health });
  expect(result).toBe({ color, status });
});