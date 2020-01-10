# GeekOfLegends
​
## Consigne de travail :
>* Créer un repository Github et Faire des commits avec des noms cohérent et explicite
>* Utiliser la structure de dossier apprise en classe
>* Utiliser de manière approfondie la matière c'est a dire, utiliser les class, les imports les extends.
>* L'histoire doit être raconté dans la console en utilisant au maximum du code pour retourner les infos par exemple :
J'ai un objet dont le nom est "Casar" dans la console je ferais apparaitre : "Casar perd 30 de vie" je ferais 
*console.log(casar.nom + " perd " + boss.attaque + " de vie" );*  et non pas 
*console.log("Casar perd 30 de vie");*
## Instructions du jeu :
#### Il te faut créer :
​
### - Trois boss(Sauron,Chronos,Lilith). 
 Chaque boss possédera les propriétés suivantes :
>* Un nom
>* Un nombre de points de vie
>* Un nombre de points d'attaque
​
#### A Savoir sur les boss :
>* une fois le boss à 20% de ses points de vie, il posera à tes heros (voir ci-dessous) une énigme (choisie aléatoirement entre minimum 3 énigmes) à laquelle ils devront répondre en 3 essais au maximum, s'ils échouent, ils mourront, sinon ils vaincront le boss.
​
​
#### Exemples d'énigmes traditionnelles :
>* Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?
>* Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?
#### Exemples d'énigmes pouvant être obtenu via des commande Javascript :
>* Quel heure est-il ?(écriture informatisée)
>* Quel est l'indice du premier "i" de cette question ?
>* Que retourne Math.floor(1.3 * 10) ?
​
Le choix du type d'énigmes est à votre guise cela peut même être un mix des styles
​
​
### - Trois héros : un Guerrier, un Mage, un Archer.
Avec les propriétés et actions suivantes :
​
### Le guerrier 
- Propriétés :
​
  >* nom
  >* points de vie
  >* points d'attaque
  >* points de rage : 0
​
- Postures :
  >* défense
  >* attaque
  >* normal
​
  #### A Savoir sur le guerrier 
  >* A chaque tour, le guerrier gagne 1 point de rage. Lorsqu'il en a 4, le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tours puis retombe à 0 points de rage (et perd le bonus de 25% atk).
​
### Le mage 
- Propriétés :
  >* nom
  >* points de vie
  >* points d'attaque
  >* points de mana : valeur qui sera aléatoirement imposée entre 7 , 9 ou 11.
​
- Postures :
  >* défense
  >* attaque
  >* normal
​
  #### A Savoir sur le mage
  >* Les attaques du mage lui coûtent 2 points de mana. Quand il n'a plus assez de mana pour attaquer, il passe un tour et récupère 7 points de mana.
​
### L'archer 
- Propriétés :
  >* nom
  >* points de vie
  >* points d'attaque
  >* nombre de flèches : valeur qui sera aléatoirement imposée entre  7, 8, 9, 10 ou 11.
​
- Postures :
  >* défense
  >* attaque
  >* normal
​
  #### A Savoir sur l'archer
  >* les attaques de l'archer consomment deux flèches par tour et récupère une flèche chaque tour. Quand il n'a plus de flèches il passe un tour et récupère 6 flèches.
​
### Les postures : 
  #### Défense :
  >* Diminue de moitié( * 0.5 ) ses dégats d'attaque mais augmente de deux fois et demi ses points de vie ( * 2.5 ) 
  >* Double les chances d'être attaqué par le boss
​
  #### Attaque
  >* Augmente de deux cinquièmes ( * 1.4 ) ses dégats d'attaque mais diminue d'un quart ses points de vie ( * 0.75 )
​
  #### Normal
  >* Aucun bonus ni malus
​
​
## A Savoir en général : 
>- Un boss est choisi aléatoirement parmis les trois, c'est vous qui aurez au préalable choisis ses caractéristiques
>- Vous attribuez des valeurs aux propriétés des boss
>- L'utilisateur choisi le nom de chaque héros
>- Vous devez fixer un total de point de vies et de points d'attaques que l'utilisateur devra distribuer entre ses héros.(faites en sorte qu'il y ait beaucoup d'interactions)
>- Chaque tour se passe ainsi : 
  >1. L'utilisateur choisi une posture ('attaque', 'défense' ou 'normal') pour chacun de ses personnages
  >2. Les 3 personnages attaquent le boss
  >3. Le boss attaque au hasard un des personnages
​
​
## Bonus :
​
>- Pour l'énigme, la réponse de l'utilisateur devra être mise en minuscule et les éventuels espace supprimés (exemple : "Un Marron" => "unmarron"). Il faudra aussi trouver une méthode qui permet de vérifier si la bonne réponse est contenue dans la réponse de l'utilisateur (exemple : bonne réponse = "homme", réponse utilisateur = "les HoMmEs" => la réponse est bonne).
​
Collapse



