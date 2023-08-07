# Installatiehandleiding Biero

![screenshot.png](src%2Fassets%2Fimages%2Fscreenshot.png)

# Ontdek de perfecte bier en gerechtcombinaties met Biero
Welkom bij mijn apllicatie Biero, waarbij passie voor eten en bier samenkomen in een unieke app. Biero is ontworpen om jou te helpen bij het vinden van het perfecte bier dat naadloos aansluit bij jouw favoriete gerecht. De app is gemaakt in het Engels. Dit komt omdat de data is opgeslagen in het Engels. Voor mededevelopers is de applicatie te clonen via gitHub, mocht je geen enkele ervaring hebben binnen het frontend-landschap volg dan het stappenplan voor installatie. 

## Inhoudsopgave
- Overzicht van de applicatiefuncties;
- Benodigdheden voor installatie;
- Stappenplan installatie;

## Overzicht van de applicatiefuncties
Pagina's:
- Start pagina;
- Registratie pagina;
- Inlog pagina;
- Favorieten pagina.

**Start pagina (Biero):** 

Op de start pagina zijn er twee verschillende zoek functies. 

1. Zoek naar bier 'Search Beer': Met deze functie kun je specifieke bieren opzoeken. Wanneer je een zoekterm invoert, worden niet alleen de resultaten weergegeven, maar zie je ook afbeeldingen van de bieren, gedetailleerde beschrijven en suggesties van gerechten die goed passen bij het geselecteerde bier. 
2. Zoek naar gerecht 'Search Dish': Hiermee kun je gerechten opzoeken en krijg je suggesties te zien voor bijpassende bieren.   

Indien gewenst kun je de opgeslagen combinaties van bier en gerecht bewaren. Om toegang te krijgen tot deze functie is registratie en inloggen verreist. 
**Let op** er wordt gebruik gemaakt van punk API, waarop de zoekfuncties zijn gebaseerd, API is in het Engles en bevat niet alle biersoorten. Veel voorkomende bieren zijn van brouwerij Brew Dog. 

**Registratie pagina (sign up):**

Op de registratiepagina kun je een nieuw account aanmaken. Deze registratie maakt gebruik van de NOVI backend. Het kan enige tijd duren voor de eerste aanvraag om de server uit de 'slaapstand' te halen, maar de responstijd zal daarna normaal zijn. Na een succesvolle registratie ontvang je een melding en kun je vervolgens inloggen op de 'Sign In' pagina. **Let op** de gebruikersdatabase wordt regelmatig geleegd, wat betekent dat registratie binnen een uur opnieuw vereist kan zijn. 

**Inlog pagina (Sign in):**

Na registratie kun je inloggen met je gebruikersnaam en wachtwoord. Na een succesvolle inlogpoging word je doorgestuurd naar de startpagina. Hier verandert de navigatiebalk, waardoor de 'Favorieten' pagina beschikbaar wordt en bovendien een 'Logout' functie verschijnt.

**Favorieten pagina (favourites):**

Op de 'Favorieten' pagina kun je jouw opgeslagen favoriete combinaties van bier en gerecht bekijken, die zijn opgeslagen in de localStorage van je browser. Daarnaast heb je de mogelijkheid om combinaties te verwijderen. Deze functionaliteit biedt jouw gemak en flexibiliteit bij het beheren van jouw persoonlijke lijst van voorkeuren.

Door deze functies en pagina's te combineren, biedt de applicatie jou de mogelijkheid om te zoeken naar smakelijke bieren en gerechten, jouw favorieten op te slaan en een gepersonaliseerde ervaring te creëren die past bij jouw smaak en voorkeuren.

## Benodigdheden voor installatie

- **Browser** 
  - Een browser, ik heb zelf gebruik gemaakt van de browser Brave. Brave zorgt ervoor dat advertentie worden geblokt; 
  - Link om brave te downloaden: https://brave.com/download/.

- **NODE JS**
  - Node.js is nodig om commando's in de terminal te kunnen uitvoeren;
  - Link om Node JS te downloaden: https://nodejs.org/en/download.

- **Integrated development environment (IDE)**
  - Om de applicatie te kunnen gebruiken is er een IDE benodigd;
  - WebStorm is een fijn IDE om te gebruiken. https://www.jetbrains.com/webstorm/.

- **Voor mede developers GIT**
  - Download GIT via de volgende link te gebruiken: https://git-scm.com/downloads.

- **Dependencies**
  - Na installatie moeten de onderstaande dependencies terug te vinden zijn in het bestand package.json: dit zijn de dependencies die ik zelf heb geinstalleerd: 
    - Commando voor terminal: npm install axios 
      - "axios": "^1.4.0" (is nodig voor API doormiddel van GET request)
    - Commando voor terminal: npm install jwt-decode
      - "jwt-decode": "^3.1.2" ( is nodig voor registratie en inloggen) 
    - Commando voor terminal: npm install react-router-dom
      - "react-router-dom": "^6.14.1"

## Stappenplan voor installatie

1. Installeer een browser naar keuze. (Chrome, Brave, Firefox, Safari, Edge)

2. Installeer WebStorm:
    - WebStorm is de IDE die ik gebruik voor het ontwikkelen van de applicatie;
   - Installeer webstorm via: https://www.jetbrains.com/webstorm/;
   - Volg de instructies op het scherm om de installatie te voltooien;
   - Als student moet je eerst een Jetbrains account aanmaken via: https://www.jetbrains.com/shop/eform/students om gebruik te maken van de studentenlicentie;
   - Download daarna WebStorm via jou account via: https://account.jetbrains.com/login;
   - Open WebStorm en activeer de software door in de bovenste menubalk op "Help" en vervolgens "Register" te klikken. Log in met jouw Jetbrains account.

3. Installeer Node JS. 
   - Ga naar de website https://nodejs.org/en/download en kies voor de 64 bit versie van windows, macOS of Linus Binaries;
   - Controleer dat ook Node JS ook daadwerkelijk is gedownload via de terminal links onderin. Voer het volgende commando uit 'node -v' en druk op enter. Bij succes vol installatie krijg je versie te zien bijvoorbeeld  v18.15.0 terug van de terminal. Krijg je een andere melding zoals bijvoorbeeld node: command not found dan is het nog niet(juist) geïnstalleerd.  
   - Vervolgens controleer je of npm juist is geïnstalleerd door het volgende commando uit te voeren in de terminal 'npm -v' en druk op enter. Er zal opnieuw een versienummer te zien zijn dat anders is dan de vorige bijvoorbeeld 9.7.2. Wordt de melding: npm: command not found weergegeven. Installeer Node.js dan opnieuw. 

4a. Voor niet mede-developer: Applicatie openen in WebStorm. 
   - Ga naar https://github.com/kfheskes/frontend_eindopdracht 
   - Klik op de groene knop met de tekst 'code'; 
   - Download de zipfile, open het zipfile en kopieer het bestand binnen WebstormProjects of een zelf gekozen map naam. 
   - Open WebStorm, klik op "File" en vervolgens op "Open", en navigeer naar de map waarin je de repository hebt uitgepakt. Selecteer de map en klik op "Open".

4b. Voor mede developer: Applicatie clonen van github 

-   Windows: 
    - Ga naar https://git-scm.com/downloads en download Git 64 bit. 
    - Vervolg de stappen door op next te drukken er hoeven geen aanpassen gedaan te worden. Zorg ervoor dat het gedownload wordt op de C schrijf.  
    - Sluit je Windows-verkenner en alle IDE's. (Webstorm)
    - Open taakbeheerder kies voor Windows-verkenner rechtermuisknop en opnieuw opstarten. Vervolgens start WebStorm op. 
    - Open de terminal en voer het commando 'git help'. Vervolgens kan je controleren of het goed is geïnstalleerd. Zodra de terminal usage: git terug geeft met meer informatie weet je dat git goed is geïnstalleerd. Ga verder naar 4c. Mocht dit niet het geval zijn probeer het opnieuw te installeren. Mocht dat niet lukken start de computer opnieuw op.
- Apple: 
    - Het kan zijn dat git al is geïnstalleerd op je computer. Controleer dit in WebStorm door in de terminal 'git --version' in te vullen en op enter te drukken. Zie je een versie nummer dan is het geïnstalleerd. bijvoorbeeld v2.39.2 (apple-git) is dit het geval ga verder naar 4c.
    - In het geval van melding commandline: open de appstore. Zoek naar 'xcode' download en installeer en herstart je terminal opnieuw op. Controleer dit door in de terminal 'git --version' in te toetsen en op enter te drukken krijg je een versie te zien dan is git geïnstalleerd. 
    - In het geval van een melding met rode tekst installeer git https://git-scm.com/downloads kies voor macOS en vervolgens voor Binary installer. Download het bestand. Na het downloaden druk je op git intel universal en installeer. Na de installatie moet de computer opnieuw worden opgestart. 
    - Open WebStorm en voer het commando 'git --version' uit. Als git goed is installeert wordt bijvoorbeeld git version 2.15.0 weergegeven. Gelukt? ga naar stap 4c zo niet volg de onderstaande stappen. 
    - Voer het volgende commando in de terminal: echo "PATH=/usr/local/git/bin:\$PATH" >> ~/.bash_profile en druk op enter. Vervolgens moet je volgende commando invullen in de terminal source ~/.bash_profile en druk op enter. 
    - Controleer of het juist is geïnstalleerd door 'git --version' in de terminal in te toetsen en druk vervolgens op enter. Als goed is krijg je bijvoorbeeld git version 2.15.0 te zien in de terminal. Dat betekent dat het gelukt is. Ga naar stap 4c.

4c.
- Ga naar https://github.com/kfheskes/frontend_eindopdracht
- Klik op groene knop code en kies voor HTTPS en kopieer de link. 
- Open WebStorm boven in de menubalk klik op Git en vervolgens op clone. Plak de link in URL-input veld en druk op clone. 

5.  npm installeren + applicatie opstarten.
   - Open terminal en voor het commando 'npm install' en druk op enter. (Dit kan even duren) 
   - Controleer of de website werkt voer in de terminal 'npm start' en druk op enter. De applicatie wordt automatisch gestart, mocht dit niet het geval zijn gebruik dan de volgende link http://localhost:3000/.

6.  Registeren en inloggen
   - Om de volledige applicatie te gebruiken, moet je je eerst registreren. Klik op "Sign up" en vul gegevens in voor registratie;
   - Na succesvolle registratie wordt gevraagd om in te loggen bij "Sign in". Voer jouw inloggegevens in om toegang te krijgen tot de applicatie;
   - Let op! Registeren moet aan de volgende eisen voldoen: 
     - email moet een @ bevatten; 
     - username moet minimaal 6 tekens bevatten;
     - password moet minimaal 6 tekens bevatten.

Met deze stappen kun je de applicatie succesvol installeren en gebruiken. Veel plezier bij het ontdekken van smakelijke bieren en gerechten! 
