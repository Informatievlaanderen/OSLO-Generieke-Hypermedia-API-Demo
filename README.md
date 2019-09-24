# OSLO Generieke Hypermedia API - DEMO

Deze applicatie biedt naast een demo ook een eenvoudig overzicht van de geïmplementeerde bouwblokken van de Generieke Hypermedia API.

## Installatie

* **Via Docker**

Om de applicatie via Docker te laten draaien, moet er eerst een image aangemaakt worden. Navigeer daarvoor eerst naar de map waar de `Dockerfile` staat. Omdat deze applicatie private npm packages van @govflanders bevat, moet er eerst een npm token aangemaakt worden. Eenmaal er een token is aangemaakt, kan de docker image gemaakt worden met volgend commando:
```
docker build --build-arg NPM_TOKEN=XXX -t gha_demo .  # Vervang XXX door je eigen npm token
```
Vervolgens kan de image gestart worden via:
```
docker run -p 3000:3000 gha_demo
```
De applicatie is beschikbaar op poort **3000**

* **Zonder Docker**

Het is ook mogelijk om de applicatie te starten zonder Docker, indien Docker niet geïnstalleerd zou zijn. Hiervoor moet eerst het bestand `.npmrc` leeg gemaakt worden, anders wordt telkens een foutmelding weergegeven. Vervolgens dienen volgende commando's uitgevoerd te worden:
```
> npm install
> node app.js
```
De applicatie draait op poort **3000**.

## Demo

Om de demo uit te voeren moet de gebruiker een URL meegeven en een bouwblok selecteren. De reeds beschikbare bouwblokken op dit moment zijn **Paginering**, **CRUD-operaties**, **Taal-selectie/ontdekking**. Indien de gebruiker niet over een URL beschikt, maar wel de demo wil uitvoeren, dan kan hij een beroep doen op de [testserver](https://github.com/Informatievlaanderen/generic-hypermedia-api-client-testserver). Door op de knop `Gebruik test URL` wordt de URL van de testserver ingevuld voor het geselecteerde bouwblok.

**Let op!** De test URL wordt gekozen op basis van het bouwblok die op dat moment geselecteerd is. Bijvoorbeeld: als het bouwblok paginering geselecteerd is op het moment dat je kiest voor de test URL, dan wordt de URL voor paginering ingevuld. Indien je daarna een ander bouwblok selecteert, dan moet ook opnieuw op de knop `Gebruik test URL` geklikt worden om de test URL te gebruiken die hoort bij het geselecteerde bouwblok.

Na het klikken op de knop `Execute` wordt de demo uitgevoerd. Het resultaat wordt getoond in het veld onderaan.
