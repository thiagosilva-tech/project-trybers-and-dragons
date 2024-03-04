import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP<T extends Fighter> extends Battle {
  constructor(private player1: T, private player2: T) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}