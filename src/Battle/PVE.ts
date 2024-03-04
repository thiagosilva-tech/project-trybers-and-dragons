// src/Battle/PVE.ts
import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(player: Fighter, private enemies: SimpleFighter[]) {
    super(player);
    this.enemies = enemies;
  }

  fight(): number {
    let result = 1;
    for (let i = 0; i < this.enemies.length; i += 1) {
      result = this.simulateBattleWithEnemy(i);
      if (result === -1) {
        return -1;
      }
    }
    return 1;
  }

  private simulateBattleWithEnemy(i: number): number {
    while (this.player.lifePoints > 0 && this.enemies[i].lifePoints > 0) {
      this.player.receiveDamage(this.enemies[i].strength);
      this.enemies[i].receiveDamage(this.player.strength);
    }
   
    if (this.player.lifePoints <= 0) {
      return -1;
    }
   
    if (this.enemies[i].lifePoints <= 0) {
      return 1;
    }
   
    return 1;
  }
}
