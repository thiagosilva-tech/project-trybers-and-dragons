import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static instaces = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instaces += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instaces;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}