export default class Pers {
  constructor(name, health) {
    this.name = name;
    if (health >= 0 && health <= 100) {
      this.health = health;
    } else {
      throw new Error('incorrect health');
    }
  }
}
