# TP - WIK-DPS-TP01

### Introduction

Le but du TP était de développer une API.
Notre API devait :
* Retourner au format `JSON` les headers de la requête quand il y une requête `HTTP GET` sur `/ping`
* Ecouter sur un port configurable via la variable d'environnement : `PING_LISTEN_PORT`
* Renvoyer une réponse vide avec code 404 si la requête quoi que ça soit d'autre que `GET /ping`
* Renvoyer une réponse vide code 500 si l'erreur était inconnue

### Installation

> Pour l'installation, il faut avoir `node` et `npm` installé sur sa machine.

```
npm init -y 

npx tsc
```

### Utilisation

> Pour l'utilisation, il vous suffit de lancer la commande suivante pour lancer le serveur :

```js
node build/index.js
Server is running on PORT: 7878
```