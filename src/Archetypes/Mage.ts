import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static instaces = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instaces;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}