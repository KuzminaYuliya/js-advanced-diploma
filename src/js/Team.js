import Bowman from './types/Bowman';
import Swordsman from './types/Swordsman';
import Daemon from './types/Daemon';
import Magician from './types/Magician';
import Undead from './types/Undead';
import Vampire from './types/Vampire';

export default class Team {
  static getStartUserTeam() {
    return [new Bowman(1), new Swordsman(1)];
  }

  static getUserTeam() {
    return [Bowman, Swordsman, Magician];
  }

  static getEnemyTeam() {
    return [Daemon, Undead, Vampire];
  }
}
