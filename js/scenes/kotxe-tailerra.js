(() => {
// Side view car. (x, y) = rear bottom-left on the ground; faces right unless flip.
function car(x, y, color, flip) {
  const t = flip ? `translate(${x + 480} ${y}) scale(-1 1)` : `translate(${x} ${y})`;
  return `<g transform="${t}">
    <path d="M0 -60 q0 -80 40 -90 h400 q40 10 40 60 v30 q0 20 -20 20 h-440 q-20 0 -20 -20z" fill="${color}"/>
    <path d="M110 -150 L160 -230 H330 L392 -150 Z" fill="${color}"/>
    <path d="M128 -152 L168 -216 H242 V-152 Z M254 -152 V-216 H322 L370 -152 Z" fill="#bfe0fb"/>
    <rect x="456" y="-120" width="22" height="16" rx="4" fill="#ffe08a"/>
    <rect x="2" y="-122" width="16" height="18" rx="4" fill="#d7263d"/>
    <line x1="240" y1="-140" x2="240" y2="-50" stroke="rgba(0,0,0,0.18)" stroke-width="3"/>
    <rect x="200" y="-110" width="26" height="6" rx="3" fill="rgba(0,0,0,0.25)"/>
    <circle cx="100" cy="-34" r="46" fill="#1d2433"/><circle cx="100" cy="-34" r="20" fill="#aab4be"/>
    <circle cx="380" cy="-34" r="46" fill="#1d2433"/><circle cx="380" cy="-34" r="20" fill="#aab4be"/>
    <rect x="-14" y="-30" width="24" height="10" rx="4" fill="#5b6577"/>
  </g>`;
}
function tyre(cx, cy, rx) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.38}" fill="#1d2433"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.45}" ry="${rx * 0.16}" fill="#5b6577"/>`;
}

SCENES.push({
  id: 'kotxe-tailerra',
  icon: '🚗',
  title: { eu: 'Kotxe tailerra', es: 'Taller de automoción', en: 'Car workshop' },
  svg: `
  ${H.room('#e8e6e1', '#bcc3ca', '#aab2ba')}
  ${H.lamp(500)}${H.lamp(1250)}
  <!-- Tool board (safe) -->
  <rect x="360" y="120" width="250" height="170" rx="8" fill="#9c7647"/>
  <g fill="#5b6577">
    <rect x="384" y="140" width="12" height="90" rx="5"/><rect x="414" y="150" width="12" height="80" rx="5"/><rect x="444" y="140" width="12" height="100" rx="5"/>
    <path d="M490 140 h40 v20 h-12 v70 h-16 v-70 h-12z"/><circle cx="572" cy="170" r="22"/><rect x="566" y="190" width="12" height="70" rx="5"/>
  </g>
  <rect x="384" y="252" width="190" height="16" rx="5" fill="#5b6577"/>
  <!-- Fire extinguisher (safe) -->
  ${H.fireExt(140, 420)}

  <!-- Open fuel can -->
  <g>
    <path d="M70 650 v-90 q0 -10 10 -10 h70 l20 20 v80 z" fill="#d7263d"/>
    <rect x="86" y="566" width="50" height="10" rx="4" fill="#a51e30"/>
    <rect x="150" y="548" width="16" height="16" fill="#5b6577"/>
    <rect x="176" y="640" width="20" height="12" rx="4" fill="#1d2433" transform="rotate(30 186 646)"/>
  </g>
  ${H.puddle(150, 680, 70, '#d8c27a')}

  <!-- CAR 1 lifted on a jack only, worker underneath -->
  <g transform="rotate(-5 340 606)">${car(240, 640, '#2b6cb0')}</g>
  <path d="M640 640 h90 v-12 h-90z" fill="#c0392b"/>
  <path d="M660 628 l40 -36 h14 l-30 36z" fill="#c0392b"/><rect x="692" y="584" width="30" height="10" fill="#5b6577"/>
  <circle cx="650" cy="642" r="7" fill="#1d2433"/><circle cx="724" cy="642" r="7" fill="#1d2433"/>
  <rect x="520" y="676" width="200" height="14" rx="5" fill="#5b6577"/><circle cx="540" cy="694" r="6" fill="#1d2433"/><circle cx="700" cy="694" r="6" fill="#1d2433"/>
  <rect x="680" y="648" width="170" height="22" rx="10" fill="#2b4a6f"/>
  <rect x="680" y="668" width="190" height="22" rx="10" fill="#2b4a6f"/>
  <rect x="846" y="626" width="16" height="40" rx="6" fill="#1d2433"/><rect x="866" y="646" width="16" height="42" rx="6" fill="#1d2433"/>
  <!-- Oil spill -->
  ${H.puddle(430, 790, 110, '#3b2f2a')}

  <!-- Battery charging + person smoking -->
  <rect x="846" y="600" width="104" height="14" fill="#5b6577"/><circle cx="858" cy="626" r="10" fill="#1d2433"/><circle cx="938" cy="626" r="10" fill="#1d2433"/>
  <rect x="856" y="540" width="84" height="60" rx="6" fill="#1d2433"/>
  <rect x="866" y="530" width="14" height="12" fill="#d7263d"/><rect x="916" y="530" width="14" height="12" fill="#5b6577"/>
  <rect x="860" y="470" width="70" height="44" rx="6" fill="#ffc20e"/><rect x="872" y="480" width="34" height="14" rx="3" fill="#1d2433"/>
  <path d="M874 514 q-10 10 0 18 M916 514 q10 10 0 18" fill="none" stroke="#1d2433" stroke-width="4"/>
  ${H.person(985, 712, { s: 0.9, dir: -1, shirt: '#3b4453', armL: [-46, -255], armR: [36, -130] })}
  <line x1="944" y1="474" x2="928" y2="478" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  <circle cx="926" cy="478" r="4" fill="#ff8a3d"/>
  <path d="M924 470 q-10 -16 4 -28 q10 -12 -2 -26" fill="none" stroke="#aab4be" stroke-width="4" stroke-linecap="round"/>

  <!-- CAR 2 running, exhaust without extraction -->
  ${car(1060, 650, '#d7263d', true)}
  ${H.smoke(1520, 610, 1, '#7a8796')}
  <path d="M1400 38 v80 q0 30 -30 30 q-30 0 -30 30 q0 30 30 30 q30 0 30 30 v40" fill="none" stroke="#3b4453" stroke-width="16" stroke-linecap="round"/>
  <rect x="1384" y="300" width="32" height="30" rx="6" fill="#5b6577"/>

  <!-- Tyres in the walkway -->
  ${tyre(1120, 790, 70)}${tyre(1250, 760, 70)}${tyre(1250, 742, 70)}
  <g transform="rotate(-20 1350 800)"><ellipse cx="1350" cy="800" rx="30" ry="62" fill="#1d2433"/><ellipse cx="1350" cy="800" rx="13" ry="28" fill="#5b6577"/></g>
  `,
  hazards: [
    { x: 740, y: 630, r: 115,
      name: { eu: 'Kotxe azpian, katuarekin bakarrik', es: 'Bajo el coche, solo con el gato', en: 'Under a car held only by a jack' },
      why: { eu: 'Katuak huts egin edo irrist egin dezake, eta autoa langilearen gainera erori.', es: 'El gato puede fallar o deslizarse y el coche caer sobre el trabajador.', en: 'The jack can fail or slip and the car can fall on the worker.' },
      fix: { eu: 'Jarri beti euskarri finkoak (kabaleteak) edo erabili altxagailua.', es: 'Poner siempre borriquetas (caballetes) o usar el elevador.', en: 'Always use axle stands or a vehicle lift.' } },
    { x: 1500, y: 560, r: 95,
      name: { eu: 'Motorra martxan, erauzgailurik gabe', es: 'Motor en marcha sin extracción', en: 'Engine running without exhaust extraction' },
      why: { eu: 'Ihes-gasek monoxido karbonoa dute: ez da ikusten, ez du usainik eta hilgarria da.', es: 'Los gases de escape contienen monóxido de carbono: invisible, sin olor y mortal.', en: 'Exhaust gas contains carbon monoxide: invisible, odourless and deadly.' },
      fix: { eu: 'Konektatu erauzgailuaren mahuka ihes-hodira motorra piztu aurretik.', es: 'Conectar la manguera de extracción al escape antes de arrancar.', en: 'Connect the extraction hose to the exhaust before starting the engine.' } },
    { x: 430, y: 790, r: 110,
      name: { eu: 'Olio-orbana lurrean', es: 'Mancha de aceite en el suelo', en: 'Oil spill on the floor' },
      why: { eu: 'Irristatu eta erortzeko arriskua.', es: 'Riesgo de resbalar y caer.', en: 'Risk of slipping and falling.' },
      fix: { eu: 'Garbitu berehala material xurgatzailearekin.', es: 'Limpiar enseguida con material absorbente.', en: 'Clean it up at once with absorbent material.' } },
    { x: 940, y: 490, r: 85,
      name: { eu: 'Erretzen bateriaren ondoan', es: 'Fumando junto a la batería', en: 'Smoking next to a charging battery' },
      why: { eu: 'Kargatzen ari den bateriak hidrogenoa askatzen du; txinparta edo sugar batek leherketa eragin dezake.', es: 'La batería en carga desprende hidrógeno; una chispa o llama puede provocar una explosión.', en: 'A charging battery gives off hydrogen; a spark or flame can cause an explosion.' },
      fix: { eu: 'Debekatuta dago tailerrean erretzea. Kargatu bateriak leku aireztatuan.', es: 'Prohibido fumar en el taller. Cargar baterías en zona ventilada.', en: 'No smoking in the workshop. Charge batteries in a ventilated area.' } },
    { x: 1235, y: 780, r: 110,
      name: { eu: 'Pneumatikoak pasabidean', es: 'Neumáticos en el pasillo', en: 'Tyres in the walkway' },
      why: { eu: 'Estropezu egin eta erortzeko arriskua; pila erori daiteke.', es: 'Riesgo de tropezar y caer; la pila puede venirse abajo.', en: 'Trip hazard; the stack can also topple over.' },
      fix: { eu: 'Gorde pneumatikoak euskarrian, pasabidetik kanpo.', es: 'Guardar los neumáticos en su soporte, fuera del pasillo.', en: 'Store tyres on a rack, away from walkways.' } },
    { x: 125, y: 620, r: 80,
      name: { eu: 'Erregai-ontzia irekita', es: 'Bidón de combustible abierto', en: 'Open fuel can' },
      why: { eu: 'Erregaiaren lurrunak oso sukoiak dira, eta isuriak irristakorrak.', es: 'Los vapores del combustible son muy inflamables y el derrame resbala.', en: 'Fuel vapour is highly flammable and the spill is slippery.' },
      fix: { eu: 'Itxi beti ontzia eta gorde material sukoientzako armairuan.', es: 'Cerrar siempre el bidón y guardarlo en el armario de inflamables.', en: 'Always close the can and keep it in the flammables cabinet.' } }
  ],
  safe: [
    { x: 145, y: 330, r: 65, name: { eu: 'Su-itzalgailua', es: 'Extintor', en: 'Fire extinguisher' },
      why: { eu: 'Ondo dago: ikusgai eta eskura.', es: 'Está bien: visible y accesible.', en: 'Fine: visible and within reach.' } },
    { x: 485, y: 205, r: 100, name: { eu: 'Erreminta-panela', es: 'Panel de herramientas', en: 'Tool board' },
      why: { eu: 'Ondo dago: erremintak ordenatuta, lurrean utzi gabe.', es: 'Está bien: herramientas ordenadas, no tiradas por el suelo.', en: 'Fine: tools stored in order, not left on the floor.' } }
  ]
});
})();
