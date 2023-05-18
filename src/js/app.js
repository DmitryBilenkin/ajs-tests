import Pers from './perses';

const game = document.querySelector('.game');

export default function verificateHealth(p) {
  if (p.health >= 50) {
    return { color: 'greenyellow', status: 'healthy' };
  } if (p.health >= 15) {
    return { color: 'yellow', status: 'wounded' };
  } if (p.health > 0) {
    return { color: 'red', status: 'critical' };
  } if (p.health === 0) {
    return { color: 'white', status: 'dead' };
  }
}

const persesInGame = [
  new Pers('Маг', 14),
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
