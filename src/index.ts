import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Criando 3 objetos do tipo Character
const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

// Executando algumas vezes o método levelUp do player1
player1.levelUp();
player1.levelUp();

// Exportando os objetos player1, player2 e player3

// Criando 2 objetos do tipo Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// Exportando os objetos monster1 e monster2

// Criando um objeto do tipo PVP
const pvp = new PVP(player2, player3);

// Exportando o objeto pvp

// Criando um objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// Exportando o objeto pve

// Criando uma função runBattles
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

// Exportando a função runBattles
export { 
  player1, 
  player2, 
  player3,
  monster1, 
  monster2,
  pvp,
  pve,
  runBattles, 
};
