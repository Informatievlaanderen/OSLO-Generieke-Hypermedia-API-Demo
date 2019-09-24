# OSLO Generieke Hypermedia API - DEMO

Deze applicatie biedt naast een demo ook een eenvoudig overzicht van de geïmplementeerde bouwblokken van de Generieke Hypermedia API.

## Installatie

### 1. Via Docker

Om de applicatie via Docker te laten draaien, moet er eerst een image aangemaakt worden. Navigeer daarvoor eerst naar de map waar de `Dockerfile` staat. Omdat deze applicatie private npm packages van @govflanders bevat, moet er eerst een npm token aangemaakt worden. Eenmaal er een token is aangemaakt, kan de docker image gemaakt worden met volgend commando:
```
docker build --build-arg NPM_TOKEN=XXX -t gha_demo  # Vervang XXX door je eigen npm token
```
Vervolgens kan de image gestart worden via:
```
docker run -p 3000:3000 gha_demo
```
De applicatie is beschikbaar op poort **3000**

### 2. Zonder Docker

Het is ook mogelijk om de applicatie te starten zonder Docker, indien Docker niet geïnstalleerd zou zijn. Hiervoor moet eerst het bestand `.npmrc` leeg gemaakt worden, anders wordt telkens een foutmelding weergegeven. Vervolgens dienen volgende commando's uitgevoerd te worden:
```
> npm install
> node app.js
```
De applicatie draait op poort **3000**.

## Demo

TODO
