import sortPers from '../js/sortFunction';
import Pers from '../js/perses';

test('sort health perses', () => {
  const arrOfPerses = [
    new Pers('Человек', 57),
    new Pers('Гном', 2),
    new Pers('Эльф', 98),
  ];
  sortPers(arrOfPerses);
  expect(arrOfPerses).toEqual([{ name: 'Эльф', health: 98 }, { name: 'Человек', health: 57 }, { name: 'Гном', health: 2 }]);
});
