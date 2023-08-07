# instalatiehandleiding Biero

![screenshot.png](src%2Fassets%2Fimages%2Fscreenshot.png)

# Ontdek de perfecte bier- en gerechtcombinaties met Biero
Welkom bij mijn apllicatie Biero, waarbij passie voor eten en bier samenkomen in een unieke app. Biero is ontworpen om jou te helpen bij het vinden van het perfecte bier dat naadloos aansluit bij jouw favoriete gerechten. De app is gemaakt in het Engels dit komt omdat de data is opgeslagen in het Engels. Voor mededevelopers is de applicatie te clonen via gitHub, mocht je geen enkele ervaring hebben binnen het frontend-landschap volg dan de onderstaande stappen. 


## Inhoudsopgave

## Benodigdheden

- **Browser** 
  - Een browser, ik heb zelf gebruik gemaakt van de browser Brave. Brave zorgt ervoor dat advertentie worden geblokt; 
  - link om brave te downloaden: https://brave.com/download/ .

- **NODE JS**
  - Node.js is nodig om commando's in de terminal te kunnen uitvoeren;
  - link om Node JS te downloaden: https://nodejs.org/en/download .

- **Integrated development environment (IDE)**
  - Om de applicatie te kunnen is een IDE benodigd;
  - WebStorm is een fijn IDE om te gebruiken. https://www.jetbrains.com/webstorm/ .

- Voor mede developers **GIT**
  - Download GIT via de volgende link te gebruiken: https://git-scm.com/downloads .


## Stappenplan

1. Installeer een browser naar keuze. 

2. Installeer WebStorm. 
   - Installeer webstorm via deze link https://www.jetbrains.com/webstorm/ ;
   - Volg de instructies op het scherm om de installatie te voltooien;
   - Let op! Ben je student maak dan eerst een Jetbrains account aan via deze link: https://www.jetbrains.com/shop/eform/students ;
   - Download daarna WebStorm via jou account via: https://account.jetbrains.com/login ;
   - Zorg ervoor dat je WebStorm daarna direct activeert door de applicatie te openen en via de bovenste menu balk op Help dan Register te klikken. Je kunt dan inloggen met jouw account.

3. Installeer Node JS. 
   - Ga naar de website https://nodejs.org/en/download en kies voor de 64 bit versie van windows, macOS of Linus Binaries;
   - Controleer dat ook Node JS ook daadwerkelijk is gedownload via de terminal links onderin. Voer het volgende commando uit node -v en druk op enter. Bij succes vol installatie krijg je versie te zien bijvoorbeeld  v18.15.0 terug van de terminal. Krijg je een andere melding zoals bijvoorbeeld node: command not found dan is het nog niet(juist) geïnstalleerd.  
   - Vervolgens controleer je of npm juist is geïnstalleerd door het volgende commando uit te voeren in de terminal npm -v en druk op enter. Er zal opnieuw een versienummer te zien zijn dat anders is dan de vorige bijvoorbeeld 9.7.2. Wordt de melding: npm: command not found weergegeven. Installeer Node.js dan opnieuw. 

4a. Voor niet mede developer: Applicatie openen in WebStorm. 
   - Ga naar https://github.com/kfheskes/frontend_eindopdracht 
   - Klik op de groene button met de tekst code. 
   - Download de zipfile, open het zipfile en kopieer het bestand binnen WebstormProjects of een zelf gekozen map naam. 
   - Open WebStorm, klik op file open vervolgens het bestand openen. 

4b. Voor mede developer: Applicatie clonen van github
    - ga naar https://git-scm.com/downloads en download kies voor jouw besturingssyteem en kies voor 64 bit.
    - voor windows: 
    - vervolg de stappen door op next te drukken er hoeven geen aanspassen gedaan te worden. zorg er voor dat het gedownload wordt op de C schrijf voor windows.  
    - sluit je windows verkenner en alle IDE's. (Webstorm)
    - open taakbeheerder kies voor windows verkenner rechter muisknop en opnieuw opstarten. vervolgens start WebStorm op. 
    - open de terminal en voer het commando git help. Vervolgens kan je controleren of het goed is geinstaleerd. zodra de terminal usage: git terug geeft met meer informatie weet je dat git goed is geinstaleerd. mocht dit niet het geval zijn probeer het opnieuw te installeren. Mocht dat niet lukken start de computer opnieuw op.
    - Apple: 
    - Het kan zijn dat git al is geïnstalleerd op je computer. Controleer dit in WebStorm door in de terminal git --version in te vullen en op enter te drukken. Zie je een versie nummer dan is het geïnstalleerd. bijvoorbeeld v2.39.2 (apple-git) is dit het geval ga verder naar 4c
    - In het geval van melding commandline: open de appstore. Zoek naar xcode download en installeer en herstart je terminal opnieuw op. controleer dit door in de terminal git --version in te toetsen en op enter te drukken krijg je een versie te zien dan is git geïnstalleerd. 
    - In het geval van een melding met rode tekst installeer git https://git-scm.com/downloads kies voor macOS en vervolgens voor Binary installer. Download het bestand. Na het downloaden druk je op git intel universal en installeer. Na de installatie moet de computer opnieuw worden opgestart. 
    - open WebStorm en voer het commando git --version uit. Als git goed is installer wordt bijvoorbeeld git version 2.15.0 weergegeven. 
    - Wanneer terminal geen git version terug geeft. Moet je nog een stap doen. Voer het volgende commando in de terminal: echo "PATH=/usr/local/git/bin:\$PATH" >> ~/.bash_profile en druk op enter.
    - vervolgens moet je volgende commando invullen in de terminal source ~/.bash_profile en druk op enter. 
    - controleer of het juist is geïnstalleerd door git --version in de terminal in te toetsen en druk vervolgens op enter. Als goed is krijg je bijvoorbeeld git version 2.15.0 te zien in de terminal. Dat betekent dat het gelukt is. 

4c.
    - Ga naar https://github.com/kfheskes/frontend_eindopdracht 
    - klik op groene button code en kies voor HTTPS en kopieer de link. 
    - Open WebStorm boven in de menu balk klik op Git en vervolgens op clone. Plak de link in URL input veld en druk op clone. 

5. npm installeren
   - Open terminal en voor het commando npm install en druk op enter. (Dit kan even duren) 
   - Controleer of de website werkt voer in de terminal npm start en druk op enter. De applicatie wordt autmatisch gestart, mocht dit niet het geval zijn gebruik dan de volgende link http://localhost:3000/ 

6. Registeren en inloggen
   - om de volledig applicatie te kunnen gebruiken moet je registeren door op Sign up te drukken zodra de registratie is gelukt dan wordt er verzocht om in te loggen bij Sign in. Na succes vol in loggen kan de applicatie gebruik worden.
   - Let op! Registeren moet aan de volgende eisen voldoen: 
     - email moet een @ bevatten. 
     - username moet minimaal 6 tekens bevatten
     - password moet minimaal 6 tekens bevatten


