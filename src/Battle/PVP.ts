import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP<T extends Fighter> extends Battle {
  private _player1: T;
  private _player2: T;

  constructor(player1: T, player2: T) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}