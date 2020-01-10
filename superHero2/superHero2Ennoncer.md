/*
## Jeu RPG
Tout premièrement, lors du début du jeu, l'utilisateur doit rentrer son prénom.

Ensuite dans la console, un message d'introduction est affiché.

```
Salut Younes! Tu vas devoir affronter plusieurs monstres durant cette aventure, juge bien tes actions ! 
Tu peux attaquer le monstre contre qui tu te trouves en utilisant la méthode swordAttack() dans la console. Tu peux aussi te soigner en écrivant healingSpell() dans la console également (celà te soignera de 15Pv à chaque utilisation). 
Il n'y aura pas que des monstres durant ton aventure, tu trouveras 3 coffres tout au long de ton parcours.
Amuse toi bien et essaie de survivre !
```

Comme écrit dans le texte, vous incarnez **un héro**, vous allez rencontrer plusieurs monstres sur votre parcours (**6** monstres au total), ils apparaîtront l'un après l'autre de façon **random** ! 

Votre héro aura un nom (celui qui est rentré au début du jeu), un nombre de Point de vie, un nombre de Point de vie Maximum, un nombre de dégâts et une vitesse.

**De base** votre héro à 100 Point de vie et Point de vie Max, 10 de dégâts et 10 de vitesse

**Chaque monstre** a un nom, un nombre de Point de vie, des dommages et une vitesse propre à chacun. 

La méthode swordAttack() fera des dégâts au monstre du stage en fonction des dégâts du héro.

Pour **les coffres**, ils apparaissant de façon **random** après un combat contre un monstre, les coffres permettent **d'améliorer les statistiques** de votre héro.

Le **premier coffre** sera un coffre qui augmentera les dégats de votre héro de +15 et sa vitesse de +5.
Le **second coffre** sera un coffre qui augmentera les Points de vie de votre héro de +10 et sa vitesse de +5.
Le **troisième coffre** sera un coffre qui augmentera les Points de vie de votre de +30 et sa vitesse de +5.

Vous allez passer de stage en stage, à chaque stage vous allez trouvez soit un monstre soit un coffre (les 2 de manières random !!!)

Si vous mourez, c'est à dire que si les Point de vie de votre héro équivaut à 0 ou moins, la partie s'arrête et une alert s'affiche pour dire que vous avez perdu la partie.

Lorsque vous attaquez ou soignez, un message est affiché dans la console pour montrer le nombre de point de vie qu'il reste au monstre et à vous (car oui les monstres vous frappe aussi), idem lorsque vous vous soignez.

**Bonus !!!!!**
Comme dis juste au-dessus, des messages s'affichent dans la console lorsque vous effectuez une action. Changez la couleur de ces messages dans la console en rouge !

**Remarques**
Voici l'affichage de la première rencontre contre un monstre

```
 Vous êtes tombé sur Frankenstein! Faites attention !!!
 Frankenstein a 60 Pv et 15 dégats
```

Quand vous l'attaquez
```
"Vous attaquez Frankenstein ces points de vies sont descendus à 50 Pv ! 
Frankenstein vous attaque ! Vos points de vie sont descendus à 95"
```
Quand il est mort
```
Frankenstein est mort, bravo ! 
```

Et quand vous passez au stage suivant 
```
Vous passez au stage suivant ! 
 Vous êtes tombé sur Monstre2 ! Faites attention !!!
```
Quand vous tombez sur un coffre l'affichage dans la console est comme ceci :
```
T'as trouvé un coffre ! Ouvre le pour voir ce qu'il y a dedans !
```
```
Vos points de vie max sont passés à 100 !
 Vos dégats sont passés à 30! 
 Votre vitesse est passée à 15 ! Félicitations !
```
*/