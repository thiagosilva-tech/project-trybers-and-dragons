import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static instaces = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instaces;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}