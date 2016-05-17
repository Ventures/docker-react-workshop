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

Otetaan React / Redux Workshopissa luotu sovellus ja kontitetaan se. Eli tarjoillaan 
clientti **nginx** serverillä, joka proxyttaa yhteyden serverille. Tämä siis kontissa.

## Esivalmistelut (Windows)

Tarvitaan VirtualBox & Docker Toolbox. Testaa toimivuus ajamalla:
```
docker run hello-world
```

## Toteutus

1. Luodaan serverille **alpine** (NodeJS) pohjainen `Dockerfile`.
   - Asennus: `npm install`, ajo `npm start`.
2. Luodaan clientille **debian** (NodeJS) pohjainen `Dockerfile`.
   - Syy tähän se, että käytössä mm. `sass`, joka vaatii `libsass` ja ei oikein
     meinaa toimia hyvin **alpine** distrolla.
   - Asennus: `npm install && npm run build`, ajo `npm start`.
   - Vaatii myös NodeJS moduulien kääntöön tarvittavan tavaran, kuten esim. `make` ja `gcc`.
3. Luodaan `docker-compose.yml` tiedosto, jonne palvelut kuvataan.
4. Ajetaan `docker-compose build && docker-compose up`.
5. Todennetaan toimiva sovellus.
