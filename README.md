# Laboration 23 - Frontend för arbetslivserfarenheter

En webbplats skapad av Emma Ågren som en del av laboration 3 i kursen Backend-baserad webbutveckling vid Mittuniversitetet.

Webbplatsen är en fristående frontend som kommunicerar med ett REST API för att hantera arbetslivserfarenheter.

## Publicerad webbplats

Webbplatsen är publicerad på Netlify:

https://lab3-frontend.netlify.app/

## Tekniker

- HTML
- CSS
- JavaScript
- Fetch API

## Funktionalitet

Webbplatsen består av tre sidor:

- **Startsida (`index.html`)** - Visar arbetslivserfarenheter som hämtas från API:et. Här går det även att radera poster.
- **Lägg till erfarenhet (`add.html`)** - Innehåller ett formulär för att lägga till nya arbetslivserfarenheter.
- **Om webbplatsen (`about.html`)** - Beskriver webbplatsens funktionalitet, webbtjänsten, databasen och slutsatser från arbetet.

Formuläret har validering som kontrollerar att alla fält är ifyllda och att slutdatum inte ligger före startdatum.

Webbplatsen har även felhantering och en responsiv layout.

## Webbtjänst

Frontend kommunicerar med ett REST API som är utvecklat med Node.js och Express.

API:et använder MongoDB Atlas som NoSQL-databas tillsammans med Mongoose och är publicerat på Render:

https://lab3-workexperience-api.onrender.com/api/workexperience

Kommunikation sker med Fetch API och JSON.

## Installation och användning

1. Klona projektet från GitHub.
2. Öppna projektmappen i Visual Studio Code.
3. Öppna `index.html` med tillägget Live Server.

## Datalagring

Arbetslivserfarenheterna lagras i en MongoDB-databas via MongoDB Atlas.

Till skillnad från laboration 2, där SQLite användes, lagras informationen nu i en molnbaserad NoSQL.databas. 

## Skapad av

Emma Ågren
Student vid Mittuniversitetet