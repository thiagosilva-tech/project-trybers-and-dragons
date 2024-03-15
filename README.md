# Projeto Trybers and Dragons (T&D)

Trybers and Dragons é um projeto de modelagem de um universo fictício baseado em um jogo de RPG de mesa. Os jogadores podem criar personagens com raças, arquétipos e habilidades únicas, participando de batalhas entre si (PVP - Player versus Player) ou contra criaturas do ambiente (PVE - Player versus Environment). O projeto tem como objetivo simular a criação e interação desses elementos dentro do contexto do jogo.

## Tecnologias Utilizadas

- **TypeScript**
- **POO**

## Requisitos do Projeto

1. **Classe Race**: Modela as características básicas de uma raça no jogo, como nome e destreza.
2. **Classes derivadas de Race**: Dwarf, Elf, Halfling e Orc, com atributos específicos para cada raça.
3. **Interface Energy**: Define os tipos de energia (mana ou stamina) e a quantidade disponível.
4. **Classe Archetype**: Modela os arquétipos das personagens, com habilidades especiais e custo energético.
5. **Classes derivadas de Archetype**: Mage, Necromancer, Warrior e Ranger, com habilidades específicas e tipos de energia diferentes.
6. **Interface Fighter**: Define os atributos e métodos comuns a todos os lutadores no jogo.
7. **Classe Character**: Representa as personagens jogáveis, com raça, arquétipo e características específicas.
8. **Interface SimpleFighter**: Define os atributos e métodos para lutadores simples, sem habilidades especiais.
9. **Classe Monster**: Representa as criaturas do ambiente, com atributos de vida e força.
10. **Classe PVP**: Modela as batalhas entre personagens jogáveis.

## Requisitos Bônus

11. **Classe PVE**: Modela as batalhas entre personagens jogáveis e criaturas do ambiente.
12. **Classe Dragon**: Representa um tipo especial de monstro, com altos pontos de vida.
13. **Criação de objetos no arquivo index**: Instancia as classes criadas e exporta para uso externo.

## Conclusão

Este projeto foi excelente oportunidade para praticar e demonstrar habilidades em TypeScript e POO. Ele permite a aplicação prática de conceitos como POO e SOLID. Além disso, o projeto também oferece a chance de refletir sobre o aprendizado e as lições ainda a serem aprendidas na jornada de desenvolvimento back-end.
