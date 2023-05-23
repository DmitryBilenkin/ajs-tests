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
  return null;
}
