import Pers from './perses';
import verificateHealth from './verificate';
import sortPers from './sortFunction';

const game = document.querySelector('.game');

const persesInGame = [
  new Pers('Маг', 100),
  new Pers('Лучник', 9),
  new Pers('Мечник', 45),
];

sortPers(persesInGame);

persesInGame.forEach((p) => {
  const healthStatus = verificateHealth(p);
  game.insertAdjacentHTML(
    'beforeend',
    `<div class='pers'>${p.name}
        <div class='health-line_container'>
            <div class='health-line' style='width: ${p.health}%; background: ${healthStatus.color}'>
            </div>
        </div>
        status '${p.name}' is: ${healthStatus.status}
    </div>`,
  );
});
