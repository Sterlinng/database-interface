# Guide d'utilisation du projet Ajax avec Laravel et Angular

Ce guide vous expliquera comment configurer et exécuter le projet Ajax avec Laravel et Angular.

## Configuration du serveur de base de données MySQL

1. Ouvrez votre terminal et exécutez la commande suivante pour accéder au serveur MySQL :
```mysql -u root -p```

2. Entrez le mot de passe de votre serveur MySQL lorsque vous y êtes invité. (appuyez sur "Entrée", il n'y en a pas.)

## Configuration du serveur Laravel

3. Accédez au dossier "device" où se trouve le serveur Laravel en utilisant la commande :
```cd device```

4. Lancez le serveur Laravel avec la commande :
```php artisan serve```

6. Le serveur Laravel est maintenant en cours d'exécution et prêt à traiter les demandes.

## Configuration du serveur Angular

6. Revenez au répertoire du projet principal en utilisant la commande :
```cd ..```

7. Accédez au dossier "projetajax" où se trouve l'application Angular avec la commande :
```cd projetajax```


8. Exécutez la commande suivante pour démarrer l'application Angular :
```ng serve```


9. L'application Angular est maintenant en cours d'exécution et écoute les demandes sur http://localhost:4200/.

## Accès à l'application

10. Ouvrez votre navigateur Web et accédez à l'URL suivante :
 ```http://localhost:4200/```

11. Vous pouvez maintenant utiliser l'application pour interagir avec les données du serveur Laravel via des appels Ajax.

--------

# Utilisation de votre logiciel avec une base de données personnalisée

Pour utiliser votre propre base de données avec ce logiciel, suivez ces étapes :

## Étape 1 : Configuration de la base de données

1. Ouvrez le fichier `.env` situé dans le répertoire `device/`.

2. Modifiez la variable `DB_DATABASE` avec le nom de votre base de données personnalisée. Par exemple, si votre base de données s'appelle `ma_base_de_donnees`, remplacez la valeur par `ma_base_de_donnees`.

3. Si votre base de données nécessite un mot de passe, assurez-vous de modifier également la variable `DB_PASSWORD` en conséquence.

## Étape 2 : Configuration de l'application Angular

1. Ouvrez le fichier `device-list-component.component.ts` situé dans le répertoire `projetajax/src/app/device-list-component/`.

2. Trouvez la variable `databaseName` (commentée dans le fichier) et remplacez la valeur par le nom de votre base de données personnalisée. Par exemple, si vous avez utilisé `ma_base_de_donnees` dans l'étape précédente, remplacez la valeur par `'ma_base_de_donnees'`.

## Étape 3 : Utilisation de votre base de données personnalisée

Après avoir effectué ces étapes, vous pouvez exécuter votre logiciel et il interagira avec votre propre base de données personnalisée.

N'oubliez pas de redémarrer votre serveur Laravel et de recompiler votre application Angular après avoir apporté ces modifications.

C'est tout ! Vous avez désormais configuré votre logiciel pour utiliser votre base de données personnalisée.

---










