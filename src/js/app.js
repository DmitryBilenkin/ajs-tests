import Pers from './perses';
import verificateHealth from './verificate';

const game = document.querySelector('.game');

const persesInGame = [
  new Pers('Маг', 12),
  new Pers('Лучник', 93),
  new Pers('Мечник', 45),
];

persesInGame.sort((a, b) => b.health - a.health);

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
