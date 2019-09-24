# OSLO Generieke Hypermedia API - DEMO

Deze applicatie biedt naast een demo ook een eenvoudig overzicht van de geïmplementeerde bouwblokken van de Generieke Hypermedia API.

## Installatie

### 1. Via Docker

Om de applicatie via Docker te laten draaien, moet er eerst een image aangemaakt worden. Navigeer daarvoor eerst naar de map waar de `Dockerfile` staat. Omdat deze applicatie private npm packages van @govflanders bevat, moet er eerst een npm token aangemaakt worden. Eenmaal er een token is aangemaakt, kan de docker image gemaakt worden met volgend commando:
```
docker build --build-arg NPM_TOKEN=XXX -t gha_demo .  # Vervang XXX door je eigen npm token
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

De gebruiker moet een URL opgeven en vervolgens de bouwblok kiezen die hij wil gebruiken. De reeds beschikbare bouwblokken op dit moment zijn Paginering, CRUD-operaties een Taal-selectie/ontdekking. Er is ook een [testserver](https://github.com/Informatievlaanderen/generic-hypermedia-api-client-testserver) geconfigureerd. Door op de knop `Gebruik test URL` te klikken, wordt automatisch de URL van de testserver ingevuld.

Let op! De test URL wordt gekozen op basis van de bouwblok die op dat moment geselecteerd is. Indien Paginering geselecteerd op is het moment dat je kiest voor de test URL, dan wordt de URL voor paginering ingevuld. Als je daarna een andere bouwblok selecteert, moet je ook opnieuw op de knop `Gebruik test URL` klikken om de test URL te gebruiken, die hoort bij de geselecteerde bouwblok.

Na het klikken op de knop `Execute` wordt de demo uitgevoerd. Het resultaat wordt getoond in het veld onderaan.
