SCENES.push({
  id: 'elikadura',
  icon: '🥖',
  title: { eu: 'Elikagaien industria', es: 'Industria alimentaria', en: 'Food processing plant' },
  svg: `
  <rect width="1600" height="620" fill="#f4f7f9"/>
  <g stroke="#dfe6ec" stroke-width="2">
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${60 + i * 40}" x2="1600" y2="${60 + i * 40}"/>`).join('')}
    ${Array.from({ length: 33 }, (_, i) => `<line x1="${i * 50}" y1="40" x2="${i * 50}" y2="620"/>`).join('')}
  </g>
  <rect width="1600" height="38" fill="#cfd8e0"/>
  <rect y="612" width="1600" height="10" fill="#9aa6b2"/>
  <rect y="620" width="1600" height="280" fill="#b9d3cf"/>
  <g stroke="#a6c3be" stroke-width="3"><line x1="0" y1="720" x2="1600" y2="720"/><line x1="0" y1="820" x2="1600" y2="820"/>
    <line x1="300" y1="620" x2="240" y2="900"/><line x1="700" y1="620" x2="680" y2="900"/><line x1="1100" y1="620" x2="1130" y2="900"/><line x1="1450" y1="620" x2="1520" y2="900"/></g>
  ${H.lamp(500)}${H.lamp(1050)}

  <!-- Hand-wash sink (safe) -->
  <rect x="60" y="430" width="160" height="40" rx="8" fill="#c9d1da"/>
  <rect x="76" y="436" width="128" height="22" rx="8" fill="#e8eef3"/>
  <path d="M140 430 v-50 h30 v12" fill="none" stroke="#8d99a6" stroke-width="8"/>
  <rect x="200" y="330" width="34" height="56" rx="6" fill="#7fd1a7"/><rect x="210" y="384" width="14" height="10" fill="#5b6577"/>
  <rect x="70" y="300" width="90" height="70" rx="6" fill="#ffffff" stroke="#c9d1da" stroke-width="3"/><rect x="92" y="368" width="46" height="18" fill="#ffffff" stroke="#c9d1da" stroke-width="3"/>
  <rect x="120" y="470" width="40" height="150" fill="#c9d1da"/>

  <!-- Worker at the conveyor, hand into the roller -->
  ${H.person(600, 610, { s: 0.95, coat: '#ffffff', hat: 'hairnet', mouthMask: true, hair: 'none', armL: [-60, -150], armR: [116, -148] })}
  <!-- Conveyor -->
  <rect x="260" y="458" width="470" height="26" rx="13" fill="#3b4453"/>
  <circle cx="273" cy="471" r="13" fill="#8d99a6"/><circle cx="717" cy="471" r="13" fill="#8d99a6"/>
  <path d="M690 446 a30 30 0 0 1 46 6 M744 490 a30 30 0 0 1 -46 6" fill="none" stroke="#d7263d" stroke-width="4" stroke-linecap="round"/>
  <rect x="280" y="484" width="20" height="126" fill="#8d99a6"/><rect x="690" y="484" width="20" height="126" fill="#8d99a6"/>
  <rect x="300" y="520" width="390" height="70" rx="6" fill="#c9d1da"/><circle cx="660" cy="555" r="14" fill="#d7263d"/>
  <g fill="#e3b26b" stroke="#c48d45" stroke-width="3">
    <path d="M320 458 q30 -34 60 0 z"/><path d="M420 458 q30 -34 60 0 z"/><path d="M520 458 q30 -34 60 0 z"/>
  </g>
  <circle cx="704" cy="466" r="12" fill="#e0ac85"/>

  <!-- Worker WITHOUT hairnet at the prep table -->
  ${H.person(900, 610, { s: 0.95, coat: '#ffffff', hair: 'long', hairColor: '#8a5a32', armL: [-60, -160], armR: [100, -170] })}
  <!-- Prep table -->
  <rect x="760" y="470" width="370" height="20" rx="4" fill="#aab4be"/>
  <rect x="780" y="490" width="14" height="130" fill="#8d99a6"/><rect x="1096" y="490" width="14" height="130" fill="#8d99a6"/>
  <rect x="794" y="570" width="302" height="10" fill="#8d99a6"/>
  <!-- Raw chicken + salad on the same board -->
  <rect x="940" y="456" width="180" height="16" rx="4" fill="#d9b382"/>
  <path d="M956 456 q10 -40 46 -34 q26 6 18 34 z" fill="#f2b4b4" stroke="#d98c8c" stroke-width="3"/>
  <path d="M1000 432 l16 -14 a8 8 0 1 1 6 8 l-14 14" fill="#f8e1d4" stroke="#d98c8c" stroke-width="3"/>
  <ellipse cx="1080" cy="448" rx="34" ry="12" fill="#7fbf5a"/><circle cx="1064" cy="444" r="8" fill="#d7263d"/><circle cx="1090" cy="442" r="8" fill="#d7263d"/>
  <rect x="850" y="460" width="70" height="8" rx="3" fill="#aab4be"/><rect x="822" y="458" width="30" height="12" rx="4" fill="#1d2433"/>

  <!-- Cold room at the wrong temperature -->
  <rect x="1170" y="150" width="180" height="470" rx="8" fill="#c9d1da" stroke="#9aa6b2" stroke-width="4"/>
  <line x1="1260" y1="260" x2="1260" y2="620" stroke="#9aa6b2" stroke-width="4"/>
  <rect x="1238" y="380" width="10" height="70" rx="4" fill="#5b6577"/><rect x="1272" y="380" width="10" height="70" rx="4" fill="#5b6577"/>
  <rect x="1196" y="176" width="128" height="62" rx="8" fill="#1d2433"/>
  <text x="1260" y="220" text-anchor="middle" font-family="Rubik, sans-serif" font-size="34" font-weight="800" fill="#ff4d5e">12°C</text>
  ${H.warn(1260, 130, 0.9)}

  <!-- Shelf: food + bleach -->
  <g fill="#9aa6b2"><rect x="1380" y="260" width="200" height="10"/><rect x="1380" y="420" width="200" height="10"/><rect x="1386" y="140" width="8" height="480"/><rect x="1566" y="140" width="8" height="480"/></g>
  <path d="M1400 260 v-60 q0 -14 14 -14 h40 q14 0 14 14 v60z" fill="#f2e6cf"/><rect x="1408" y="214" width="52" height="18" fill="#d9b382"/>
  <path d="M1484 260 v-60 q0 -14 14 -14 h40 q14 0 14 14 v60z" fill="#f2e6cf"/><rect x="1492" y="214" width="52" height="18" fill="#d9b382"/>
  <rect x="1400" y="370" width="40" height="50" rx="4" fill="#d7263d"/><rect x="1400" y="384" width="40" height="18" fill="#fff"/>
  <path d="M1458 420 v-58 q0 -10 10 -14 l6 -14 h16 l6 14 q10 4 10 14 v58 z" fill="#2b6cb0"/>
  <rect x="1466" y="370" width="38" height="38" fill="#fff" transform="rotate(45 1485 389)"/>
  <path d="M1478 382 l6 10 m6 -10 l-6 10 m-8 4 h18" stroke="#1d2433" stroke-width="3"/>
  <rect x="1520" y="374" width="40" height="46" rx="4" fill="#d7263d"/><rect x="1520" y="386" width="40" height="18" fill="#fff"/>
  <rect x="1404" y="540" width="70" height="80" rx="6" fill="#e3b26b"/><rect x="1484" y="550" width="70" height="70" rx="6" fill="#e3b26b"/>

  <!-- Pedal bin (safe) -->
  <rect x="1080" y="640" width="76" height="96" rx="10" fill="#8d99a6"/><rect x="1074" y="632" width="88" height="14" rx="6" fill="#5b6577"/>
  <rect x="1094" y="736" width="40" height="8" rx="3" fill="#3b4453"/>
  <!-- Wet floor, no sign -->
  ${H.puddle(600, 790, 125)}
  <rect x="740" y="520" width="10" height="210" rx="4" fill="#9c7647" transform="rotate(14 745 730)"/>
  <path d="M716 724 h58 l-6 26 h-46z" fill="#2b6cb0"/>
  `,
  hazards: [
    { x: 900, y: 340, r: 64,
      name: { eu: 'Ile-sarerik gabe', es: 'Sin redecilla', en: 'No hairnet' },
      why: { eu: 'Ileak elikagaietara eror daitezke eta kutsatu.', es: 'El pelo puede caer en los alimentos y contaminarlos.', en: 'Hair can fall into the food and contaminate it.' },
      fix: { eu: 'Erabili beti ile-sarea edo txanoa, ile guztia barruan.', es: 'Usar siempre redecilla o gorro, con todo el pelo dentro.', en: 'Always wear a hairnet or cap with all the hair tucked in.' } },
    { x: 1030, y: 448, r: 72,
      name: { eu: 'Gordinak eta jateko prest daudenak nahastuta', es: 'Crudos junto a alimentos listos para consumir', en: 'Raw and ready-to-eat food together' },
      why: { eu: 'Kutsadura gurutzatua: oilasko gordinaren bakterioak (adib. Salmonella) entsaladara pasatzen dira.', es: 'Contaminación cruzada: las bacterias del pollo crudo (p. ej. Salmonella) pasan a la ensalada.', en: 'Cross-contamination: bacteria from raw chicken (e.g. Salmonella) get onto the salad.' },
      fix: { eu: 'Erabili ebaketa-taula eta labana desberdinak (kolore-kodea) eta bereizi lan-eremuak.', es: 'Usar tablas y cuchillos distintos (código de colores) y separar zonas de trabajo.', en: 'Use separate boards and knives (colour coding) and separate work areas.' } },
    { x: 1260, y: 205, r: 62,
      name: { eu: 'Hozkailua tenperatura okerrean', es: 'Cámara a temperatura incorrecta', en: 'Cold room at the wrong temperature' },
      why: { eu: '12 °C-tan bakterioak azkar ugaltzen dira eta elikagaiak hondatzen dira.', es: 'A 12 °C las bacterias se multiplican rápido y los alimentos se estropean.', en: 'At 12 °C bacteria multiply quickly and food spoils.' },
      fix: { eu: 'Mantendu 0 eta 4 °C artean eta erregistratu tenperatura egunero.', es: 'Mantener entre 0 y 4 °C y registrar la temperatura cada día.', en: 'Keep it between 0 and 4 °C and log the temperature every day.' } },
    { x: 708, y: 468, r: 58,
      name: { eu: 'Eskua makinan, martxan dagoela', es: 'Mano en la máquina en marcha', en: 'Hand in a running machine' },
      why: { eu: 'Arrabolek eskua harrapatu eta zauri larriak eragin ditzakete.', es: 'Los rodillos pueden atrapar la mano y causar lesiones graves.', en: 'The rollers can trap the hand and cause serious injuries.' },
      fix: { eu: 'Gelditu eta blokeatu makina eskua sartu aurretik. Ez kendu babesak.', es: 'Parar y bloquear la máquina antes de meter la mano. No quitar las protecciones.', en: 'Stop and lock out the machine before reaching in. Never remove guards.' } },
    { x: 600, y: 790, r: 120,
      name: { eu: 'Lurra bustita, seinalerik gabe', es: 'Suelo mojado sin señalizar', en: 'Wet floor with no sign' },
      why: { eu: 'Irristatu eta erortzeko arriskua.', es: 'Riesgo de resbalar y caer.', en: 'Risk of slipping and falling.' },
      fix: { eu: 'Lehortu lurra eta jarri «lurra bustita» seinalea bitartean.', es: 'Secar el suelo y poner la señal de «suelo mojado» mientras tanto.', en: 'Dry the floor and put up a “wet floor” sign in the meantime.' } },
    { x: 1482, y: 385, r: 50,
      name: { eu: 'Garbiketa-produktua elikagaien artean', es: 'Producto de limpieza entre los alimentos', en: 'Cleaning product stored with food' },
      why: { eu: 'Elikagaiak kutsa ditzake edo beste produktu batekin nahas daiteke.', es: 'Puede contaminar los alimentos o confundirse con otro producto.', en: 'It can contaminate food or be mistaken for something else.' },
      fix: { eu: 'Gorde garbiketa-produktuak beren armairuan, elikagaietatik bereizita.', es: 'Guardar los productos de limpieza en su armario, separados de los alimentos.', en: 'Keep cleaning products in their own cupboard, away from food.' } }
  ],
  safe: [
    { x: 140, y: 400, r: 95, name: { eu: 'Eskuak garbitzeko konketa', es: 'Lavamanos', en: 'Hand-wash sink' },
      why: { eu: 'Ondo dago: xaboia eta paperezko eskuoihalak ditu.', es: 'Está bien: tiene jabón y toallas de papel.', en: 'Fine: it has soap and paper towels.' } },
    { x: 1118, y: 690, r: 55, name: { eu: 'Pedaldun zakarrontzia', es: 'Cubo con pedal', en: 'Pedal bin' },
      why: { eu: 'Ondo dago: eskuak erabili gabe irekitzen da.', es: 'Está bien: se abre sin usar las manos.', en: 'Fine: it opens without using your hands.' } },
    { x: 600, y: 330, r: 55, name: { eu: 'Ile-sarea eta maskara', es: 'Redecilla y mascarilla', en: 'Hairnet and mask' },
      why: { eu: 'Ondo dago: langile honek ilea eta ahoa estalita ditu.', es: 'Está bien: esta persona lleva el pelo y la boca cubiertos.', en: 'Fine: this worker has hair and mouth covered.' } }
  ]
});
