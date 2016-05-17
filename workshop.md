# React / Redux Workshop

## Tavoite

Valmis sovelluksen runko, lisätään toinen sivu sovellukseen. Haetaan valmiista
bäkkäristä data ks. sivulle.

## Esivalmistelut (Windows)

1. Asennetaan NVM (Node Version Manager)
   - Ladataan `nvm-setup.exe` [täältä](https://github.com/coreybutler/nvm-windows/releases/download/1.1.0/nvm-setup.zip).

2. Asennetaan NodeJS 6.0+
   - Komento `nvm install stable`.
   - Komento `nvm use stable`.

3. Asennetaan `yeoman` ja tarvittava `senketsu` generaattori
   - Komento `npm install -g yo generator-senketsu`

## Toteutus

1. Luodaan uusi projekti, johon luodaan kansiot `server` ja `client`.
2. Kloonataan `server` hakemistoon valmis kama githubista.
3. Alustetaan `client` hakemistoon uusi projekti `yo senketsu`.
4. Lisätään projektiin uusi sivu, joka näyttää omistajan ja hänen koiransa.
5. Haetaan data valmiilta bäkkäriltä (`/api` proxy).

# Docker Workshop

## Tavoite

Otetaan React / Redux Workshopissa luotu sovellus ja kontitetaan se. Laitetaan
fronttisovellus **nginx** sisään ja lisätään bäkkäriin laskuri, joka laskee
montako pyyntöä on otettu käynnissäoloajan vastaan. Lisätään rajapinta, joka
palauttaa tämän. Kontitetaan erikseen frontti, serveri ja redis. Luodaan näitä
hallitsemaan **docker-compose** konfiguraatio.

## Esivalmistelut (Windows)

Edellisen workshopin lisäksi, tarvitaan VirtualBox & Docker Toolbox.

## Toteutus

1. Luodaan serverille **alpine** pohjainen `Dockerfile`.
2. Luodaan clientille **debian** pohjainen `Dockerfile`.
3. Luodaan `docker-compose.yml` tiedosto, jonne palvelut kuvataan.
4. Ajetaan `docker-compose build && docker-compose up`.
5. Todennetaan toimiva sovellus.
