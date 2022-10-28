<link rel="stylesheet" href="https://philquand.github.io/Javascript/Astr/Theme-Markdown.css" />
<center><span style="font-size: 24px; font-weight: bold">CartePhil version 5.06</span></center>

Voici quelques détails de la nouvelle version de cette « carte de mise en valeur des données ».
Dans la suite j'appelle enregistrement une ligne géolocalisée de la base de données et propriétés de l'enregistrement, les champs de cette ligne. 

1. les *icônes* de la carte
   * trois types d'icônes peuvent être présents sur la carte, suivant le niveau de zoom en cours.
     1. une épingle de couleur, dans ce cas, l'icône représente un élément de la légende dont les détails sont indiqués dans un  « pop up » qui apparait suite à un click sur l'icône.
     2. un rond vert avec un chiffre à l'intérieur, dans ce cas l'icône regroupe plusieurs éléments de la légende qui sont localisés au même endroit, un click sur l'icône permet d'augmenter le niveau de zoom pour les distinguer.
     3. un rond jaune avec un chiffre à l'intérieur, dans ce cas l'icône regroupe plusieurs éléments de la légende qui sont localisés non plus au même endroit mais suffisament proche pour être regroupés au niveau du zoom en cours, un click sur l'icône permet d'augmenter le niveau de zoom pour les distinguer.
2. la *légende* (<i>en bas à gauche</i>)
   * Elle est dynamique, le cas échéant, un onglet permet de choisir un filtre d'enregistrements et de les afficher sur la carte avec une épingle dont la couleur dépend d'une propriété.
   * Je peux « facilement » la modifier sur la base d'une demande précisée par un cahier des charges (à discuter entre nous). 
3. le sélecteur de *couches* (<i>en haut à droite sous la bannière de la Coordination</i>)
   * un click sur le sélecteur ouvre un menu qui permet de choisir (ou revenir) aux couches suivantes.
     1. La couche *par défaut* est celle affichée à l'ouverture de la carte.
     2. Dans la couche *départements* les données sont classées par départements dont la couleur dépend du nombre d'enregistrements qui y sont géolocalisés. Un click sur un département ouvre un « popup local » qui indique le nombre d'enregistrements qui y sont géolocalisés et un lien qui permet de zoomer sur le département et de l'ouvrir.
     3. La couche *régions* fonctionne comme celle des départements.
4. Le bouton *Données* (<i>au-dessus de la carte</i>)
   * Il permet d'accéder à une vue où certaines propriétés des enregistrements sont organisées sous forme de tableau. 
   * Il est possible de filtrer les enregistrements avec les filtres de colonnes (onglets dans les en-têtes de colonnes qui peuvent être utilisés sur plusieurs colonnes simultanément).
   * Un click sur le bouton « CSV » (en haut et à droite du tableau), permet d'exporter le tableau filtré au format CSV (fichier texte pouvant être ouvert dans un tableur de type excel), 
   * Dès qu'un filtre au moins est activé, un bouton vert « réinit. » apparaît en haut et à droite du tableau (à côté du bouton « CSV »). Il permet de supprimer d'un click tous les filtres activés.
   * Le résultat du filtrage est reporté sur la carte qui s'affiche de nouveau d'un click sur le bouton « Carte » (qui a remplacé le bouton « Données » dans cette vue) 
   * Dans la légende de la carte une étoile rouge est apparue si les données ont été filtrées, elle disparaît si un retour dans la vue « Données » suivi d'un click sur le bouton Réinitialiser supprime le filtre.
5. Les *autres boutons* de la carte (<i>en haut à gauche</i>)
   1. Les boutons « +/- » permettent de zoomer/dézoomer
   2. le « carré » permet d'accéder à une vue de la carte en plein écran, c'est **vivement recommandé**
   3. la « petite maison » permet de revenir au niveau de zoom et centrage de l'accueil 
   4. « l'avion» permet de centrer la carte sur la Corse ou un département d'Outre Mer (appuyer plusieurs fois sur l'avion si le voyage n'est direct)
   5. La « loupe » permet d'afficher une épingle rouge sur un lieu particulier (pour ceux qui sont perdus...)
