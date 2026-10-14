# Laboratin 2 - Frontend för arbetslivserfarenheter

En webbplats skapad av Emma Ågren som en del av laboration 2 i kursen Backend-baserad webbutveckling vid Mittuniversitetet.
Webbplatsen är en fristående frontend som kommunicerar med ett RES API för att hantera arbetslivserfarenheter.

## Publicerad webbplats

Webbplatsen är publicerad på Netlify:

https://lab2-frontend.netlify.app/

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

Frontend kommunicerar med ett REST API som är utvecklat med Node.js, Express och SQLite.

API:et är publicerat på Render:

https://lab2-workexperience-api.onrender.com/api/workexperience

Kommunikation sker med Fetch API och JSON.

## Installation och användning

1. Klona projektet från GitHub.
2. Öppna projektmappen i Visual Studio Code.
3. Öppna `index.html` med tillägget Live Server.

## Datalagring

Arbetslivserfarenheterna lagras i en SQLite-databas på backend-servern.

Eftersom API:et körs på Renders kostnadsfria tjänst kan databasinnehållet försvinna när servern startas om eller publiceras på nytt.

## Skapad av

Emma Ågren
student
MIUN