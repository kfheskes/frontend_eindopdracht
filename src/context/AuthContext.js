// Stap 1: Maak een state object aan voor de authenticatie
// Stap 2: Pas de verwijzingen naar de state aan (ook bij je logout functie)
// Stap 5: Token ontvangen en decoderen
// Stap 6: Token opslaan in de local storage en verwijderen bij logout
// Stap 7: Gebruiker ophalen met de token
// Stap 8: Zet gebruikers info in de state (NIET DE JWT TOKEN)
// Stap: 9: Geef ook de user mee aan de context
// stap 10: gebruik use Effect om te checken of er een token in de localstorage zit
// stap 11: als er een token in de localstorage zit, check dan of deze nog geldig is
// stap 12: als de token nog geldig is,  log de gebruiker in
// stap 13: als de token niet meer geldig is, log de gebruiker uit
// stap 14: maak een state aan om de pagina status bij te houden (pending, done)
// stap 15:
// stap 16: haal de user data op uit de database en sla deze op in de state
// stap 17 geef een redirect mee (optioneel)

import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null)


function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);

    function login() {
        setIsAuth(true)
    }

    function logOut() {
        setIsAuth(false)
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logOut,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;