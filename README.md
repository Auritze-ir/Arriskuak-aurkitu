# Arriskuen ehiza · Caza de riesgos · Hazard Hunt

**CIFP Don Bosco LHII** — Laneko arriskuen prebentzioa jolastuz lantzeko jolasa, gela interaktiborako (ukimen anitzeko pareta).
Juego para trabajar la prevención de riesgos laborales jugando, pensado para el aula interactiva (pared multitáctil).
A game for learning about workplace safety through play, designed for the interactive classroom (multi-touch wall).

## Eszenak · Escenas · Scenes

| | EU | ES | EN | Arriskuak |
|---|---|---|---|---|
| ⚡ | Elektrizitate tailerra | Taller de electricidad | Electrical workshop | 7 |
| ⚙️ | Mekanizazio tailerra | Taller de mecanizado | Machining workshop | 6 |
| 🔥 | Soldadura tailerra | Taller de soldadura | Welding workshop | 6 |
| 🚗 | Kotxe tailerra | Taller de automoción | Car workshop | 6 |
| 🧪 | Kimika laborategia | Laboratorio de química | Chemistry lab | 6 |
| 🥖 | Elikagaien industria | Industria alimentaria | Food processing plant | 6 |
| 📡 | Antenak teilatuan | Antenas en la azotea | Antennas on the roof | 6 |
| 🚦 | Bidegurutzea | El cruce | The crossroads | 6 |

## Nola jokatu · Cómo se juega · How to play

- 2 minutu arrisku guztiak aurkitzeko. Huts egiteak 3 segundo kentzen ditu.
- Arrisku bat ukitzean azalpena eta zuzenketa agertzen dira.
- "Tranpa" elementuak ere badaude (ondo daudenak): ukitzean "Ondo dago" agertzen da, eta ez da denborarik galtzen.
- Hizkuntza menuan aukeratzen da (EU / ES / EN).

## GitHub Pages-en argitaratu · Publicar · Publish

1. Igo karpeta honetako guztia repositorio berri baten erroan (`index.html`, `js/`, `README.md`).
2. **Settings → Pages** → branch `main`, folder `/ (root)`.
3. Helbidea: `https://<erabiltzailea>.github.io/<repositorioa>/`

## Egitura · Estructura · Structure

```
index.html              Jokoa: menua, motorra eta testuak (EU/ES/EN)
js/helpers.js           Marrazteko laguntzaileak (pertsonak, su-itzalgailua...)
js/scenes/*.js          Eszena bakoitza: marrazkia (SVG) + arriskuak + elementu seguruak
```

## Arrisku bat aldatu edo gehitu · Editar o añadir un riesgo · Edit or add a hazard

Eszena bakoitzaren fitxategian, `hazards` zerrendako elementu bakoitzak hau du:

```js
{ x: 610, y: 380, r: 70,                       // ukitzeko gunea (1600×900 koordenatuetan)
  name: { eu: '…', es: '…', en: '…' },          // izena
  why:  { eu: '…', es: '…', en: '…' },          // zergatik den arriskutsua
  fix:  { eu: '…', es: '…', en: '…' } }         // nola zuzendu
```

Eszena berri bat gehitzeko, kopiatu `js/scenes/` karpetako fitxategi bat, aldatu eta gehitu `<script>` lerroa `index.html`-n.
