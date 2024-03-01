import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static instaces = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instaces;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}