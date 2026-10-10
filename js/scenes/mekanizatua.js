SCENES.push({
  id: 'mekanizatua',
  icon: '⚙️',
  title: { eu: 'Mekanizazio tailerra', es: 'Taller de mecanizado', en: 'Machining workshop' },
  svg: `
  ${H.room('#e3e9e4', '#c4cbc6', '#b3bab5')}
  ${H.lamp(400)}${H.lamp(1100)}
  <!-- Hearing protection poster (safe) -->
  <rect x="300" y="110" width="150" height="150" rx="8" fill="#2b6cb0"/>
  <circle cx="375" cy="170" r="42" fill="#fff"/>
  <path d="M345 176 q30 -60 60 0" fill="none" stroke="#2b6cb0" stroke-width="8"/>
  <rect x="337" y="168" width="18" height="30" rx="6" fill="#2b6cb0"/><rect x="395" y="168" width="18" height="30" rx="6" fill="#2b6cb0"/>
  <rect x="322" y="226" width="106" height="12" rx="4" fill="#fff"/>

  <!-- LATHE -->
  <rect x="80" y="520" width="480" height="100" rx="6" fill="#5b6577"/>
  <rect x="100" y="540" width="120" height="60" rx="4" fill="#4a5363"/><rect x="380" y="540" width="160" height="60" rx="4" fill="#4a5363"/>
  <rect x="120" y="470" width="420" height="32" fill="#8d99a6"/>
  <rect x="80" y="380" width="140" height="140" rx="8" fill="#2b6cb0"/>
  <circle cx="110" cy="410" r="9" fill="#1d2433"/><circle cx="140" cy="410" r="9" fill="#1d2433"/><rect x="100" y="440" width="90" height="10" rx="4" fill="#7fd1a7"/>
  <circle cx="250" cy="450" r="44" fill="#aab4be" stroke="#5b6577" stroke-width="5"/>
  <rect x="240" y="412" width="20" height="16" fill="#5b6577"/><rect x="240" y="472" width="20" height="16" fill="#5b6577"/>
  <rect x="292" y="442" width="180" height="16" fill="#9aa6b2"/>
  <path d="M195 420 a62 62 0 0 1 30 -32 M305 480 a62 62 0 0 1 -30 32" fill="none" stroke="#5b6577" stroke-width="4" stroke-linecap="round"/>
  <!-- chuck key left in -->
  <line x1="250" y1="410" x2="250" y2="356" stroke="#1d2433" stroke-width="10" stroke-linecap="round"/>
  <line x1="222" y1="356" x2="278" y2="356" stroke="#1d2433" stroke-width="10" stroke-linecap="round"/>
  <rect x="330" y="430" width="80" height="40" rx="4" fill="#5b6577"/>
  <rect x="470" y="418" width="70" height="52" rx="4" fill="#2b6cb0"/><rect x="540" y="434" width="20" height="16" fill="#8d99a6"/>
  <!-- Fire extinguisher (safe) -->
  ${H.fireExt(608, 600)}
  <!-- Lathe operator with loose long hair -->
  ${H.person(430, 700, { s: 0.95, dir: -1, hair: 'long', hairColor: '#6b3e1f', shirt: '#4a7a5c', goggles: true, armL: [-66, -262], armR: [-40, -238] })}
  <path d="M440 400 q10 40 -6 80 q-30 14 -60 -6 q-16 -8 -34 10 q4 -30 30 -36 q20 -4 34 -30 z" fill="#6b3e1f"/>

  <!-- MILLING MACHINE with open guard -->
  <rect x="690" y="180" width="100" height="440" fill="#2f7d6d"/>
  <rect x="690" y="180" width="220" height="80" rx="6" fill="#2f7d6d"/>
  <rect x="832" y="260" width="30" height="70" fill="#5b6577"/>
  <rect x="815" y="330" width="64" height="34" rx="4" fill="#aab4be"/>
  <g stroke="#5b6577" stroke-width="3"><line x1="826" y1="330" x2="826" y2="364"/><line x1="840" y1="330" x2="840" y2="364"/><line x1="854" y1="330" x2="854" y2="364"/><line x1="868" y1="330" x2="868" y2="364"/></g>
  <rect x="800" y="368" width="94" height="32" fill="#8d99a6"/>
  <rect x="650" y="400" width="300" height="26" rx="3" fill="#5b6577"/>
  <rect x="700" y="426" width="110" height="94" fill="#26685b"/>
  <rect x="670" y="590" width="260" height="30" fill="#26685b"/>
  <polygon points="905,268 985,236 985,372 905,392" fill="#9ad3f0" opacity="0.55" stroke="#5b8fb0" stroke-width="4"/>
  <circle cx="905" cy="280" r="7" fill="#5b6577"/>
  <g stroke="#ff8a3d" stroke-width="4" stroke-linecap="round"><line x1="880" y1="352" x2="930" y2="330"/><line x1="878" y1="362" x2="940" y2="366"/><line x1="812" y1="356" x2="770" y2="330"/></g>
  <g fill="#c9a45c"><path d="M936 320 q8 -10 14 2 q-6 8 -14 -2z"/><path d="M948 360 q8 -8 12 4 q-8 6 -12 -4z"/><path d="M762 324 q-8 -8 -14 4 q8 6 14 -4z"/></g>

  <!-- DRILL PRESS + chips removed by hand -->
  <rect x="1010" y="598" width="150" height="22" rx="4" fill="#7a2a22"/>
  <rect x="1062" y="230" width="22" height="370" fill="#8d99a6"/>
  <rect x="1010" y="210" width="150" height="110" rx="10" fill="#c0392b"/>
  <rect x="1030" y="182" width="90" height="34" rx="8" fill="#a5302a"/>
  <path d="M1150 260 l40 30 m-40 -30 l44 -10" stroke="#5b6577" stroke-width="6" stroke-linecap="round"/>
  <rect x="1078" y="320" width="18" height="30" fill="#5b6577"/>
  <line x1="1087" y1="350" x2="1087" y2="392" stroke="#aab4be" stroke-width="6"/>
  <rect x="1020" y="410" width="130" height="16" rx="3" fill="#8d99a6"/>
  <rect x="1046" y="394" width="80" height="16" fill="#5b6577"/>
  <g fill="none" stroke="#c9a45c" stroke-width="4"><path d="M1040 394 q6 -14 14 0 q6 -14 14 0"/><path d="M1110 394 q6 -14 14 0 q6 -14 14 0"/></g>
  <rect x="1124" y="398" width="44" height="10" rx="3" fill="#9c7647"/><rect x="1162" y="394" width="16" height="18" rx="3" fill="#3b2a20"/>
  <path d="M1064 380 a30 10 0 0 0 46 0" fill="none" stroke="#5b6577" stroke-width="3"/>
  ${H.person(1225, 700, { s: 0.92, dir: -1, shirt: '#2b6cb0', goggles: true, armL: [-138, -316], armR: [-70, -190] })}

  <!-- Chip bin (safe) -->
  <rect x="950" y="640" width="64" height="76" rx="6" fill="#5b6577"/><rect x="944" y="630" width="76" height="14" rx="4" fill="#3b4453"/>
  <rect x="962" y="660" width="40" height="20" rx="3" fill="#ffc20e"/>

  <!-- Oil spill -->
  ${H.puddle(810, 780, 120, '#3b2f2a')}
  <path d="M760 772 q20 -4 30 4" stroke="#7a6a5a" stroke-width="4" fill="none"/>

  <!-- SHELF with heavy parts at the edge -->
  <g fill="#7a8796">
    <rect x="1330" y="140" width="14" height="480"/><rect x="1546" y="140" width="14" height="480"/>
    <rect x="1320" y="200" width="250" height="12"/><rect x="1320" y="340" width="250" height="12"/><rect x="1320" y="480" width="250" height="12"/><rect x="1320" y="606" width="250" height="12"/>
  </g>
  <circle cx="1330" cy="156" r="44" fill="#5b6577"/><circle cx="1330" cy="156" r="16" fill="#e3e9e4"/>
  <g fill="#5b6577"><rect x="1322" y="104" width="16" height="12"/><rect x="1322" y="196" width="16" height="6"/><rect x="1278" y="148" width="12" height="16"/></g>
  <rect x="1470" y="150" width="120" height="50" fill="#8d99a6" stroke="#5b6577" stroke-width="3"/>
  <rect x="1360" y="290" width="70" height="50" fill="#c49a6c"/><rect x="1440" y="300" width="90" height="40" fill="#b88a5a"/>
  <rect x="1370" y="430" width="160" height="50" fill="#c49a6c"/>
  <rect x="1365" y="560" width="70" height="46" fill="#8d99a6"/><rect x="1450" y="566" width="80" height="40" fill="#8d99a6"/>
  `,
  hazards: [
    { x: 400, y: 440, r: 70,
      name: { eu: 'Ile luzea solte tornuaren ondoan', es: 'Pelo largo suelto junto al torno', en: 'Loose long hair near the lathe' },
      why: { eu: 'Ile solteak, arropa zabalak edo eraztunak pieza birakariek harrapa ditzakete.', es: 'El pelo suelto, la ropa holgada o los anillos pueden quedar atrapados por las piezas que giran.', en: 'Loose hair, baggy clothes or rings can get caught by rotating parts.' },
      fix: { eu: 'Bildu ilea (txapela edo sarea) eta ez eraman eraztunik, eskumuturrekorik edo arropa zabalik.', es: 'Recoger el pelo (gorro o redecilla) y no llevar anillos, pulseras ni ropa holgada.', en: 'Tie hair back (cap or net) and do not wear rings, bracelets or loose clothing.' } },
    { x: 250, y: 400, r: 62,
      name: { eu: 'Plater-giltza tornuan ahaztuta', es: 'Llave del plato olvidada en el torno', en: 'Chuck key left in the lathe' },
      why: { eu: 'Tornua martxan jartzean giltza indar handiz jaurtitzen da.', es: 'Al poner el torno en marcha, la llave sale disparada con mucha fuerza.', en: 'When the lathe starts, the key is thrown out with great force.' },
      fix: { eu: 'Kendu beti giltza makina martxan jarri aurretik.', es: 'Quitar siempre la llave antes de poner la máquina en marcha.', en: 'Always remove the key before starting the machine.' } },
    { x: 880, y: 330, r: 95,
      name: { eu: 'Fresagailua babesik gabe', es: 'Fresadora sin protección', en: 'Milling machine with the guard open' },
      why: { eu: 'Ebakitzailea agerian dago: txirbilak jaurtitzen ditu eta eskua harrapa dezake.', es: 'La fresa queda al descubierto: proyecta virutas y puede atrapar la mano.', en: 'The cutter is exposed: it throws chips and can catch a hand.' },
      fix: { eu: 'Lan egitean babes-pantaila itxita. Babesa irekita badago, makinak ez du martxan egon behar.', es: 'Trabajar con la pantalla cerrada. Con la protección abierta la máquina no debe funcionar.', en: 'Work with the guard closed. With the guard open, the machine must not run.' } },
    { x: 1090, y: 395, r: 60,
      name: { eu: 'Txirbilak eskuz kentzen', es: 'Quitar virutas con la mano', en: 'Removing chips by hand' },
      why: { eu: 'Txirbilak zorrotzak dira, eta zulagailua martxan dagoela eskua harrapa daiteke.', es: 'Las virutas cortan y, con el taladro en marcha, la mano puede quedar atrapada.', en: 'Chips are sharp, and with the drill running the hand can get caught.' },
      fix: { eu: 'Gelditu makina eta erabili eskuila edo kakoa.', es: 'Parar la máquina y usar un cepillo o un gancho.', en: 'Stop the machine and use a brush or a hook.' } },
    { x: 810, y: 780, r: 110,
      name: { eu: 'Olio-orbana lurrean', es: 'Mancha de aceite en el suelo', en: 'Oil spill on the floor' },
      why: { eu: 'Irristatu eta erortzeko arriskua; makinen ondoan are arriskutsuagoa da.', es: 'Riesgo de resbalar y caer, aún más peligroso junto a las máquinas.', en: 'Risk of slipping and falling, even worse next to machines.' },
      fix: { eu: 'Garbitu berehala material xurgatzailearekin eta markatu eremua.', es: 'Limpiar enseguida con absorbente y señalizar la zona.', en: 'Clean it up at once with absorbent and mark off the area.' } },
    { x: 1330, y: 156, r: 75,
      name: { eu: 'Pieza astunak apalaren ertzean', es: 'Piezas pesadas al borde de la estantería', en: 'Heavy parts at the edge of the shelf' },
      why: { eu: 'Goiko apaletik erori eta norbaiti jo diezaiokete.', es: 'Pueden caer desde lo alto y golpear a alguien.', en: 'They can fall from the top shelf and hit someone.' },
      fix: { eu: 'Jarri pieza astunak beheko apaletan, ondo barrura sartuta.', es: 'Colocar las piezas pesadas en las baldas bajas y bien metidas.', en: 'Store heavy parts on the lower shelves, pushed well back.' } }
  ],
  safe: [
    { x: 610, y: 500, r: 60, name: { eu: 'Su-itzalgailua', es: 'Extintor', en: 'Fire extinguisher' },
      why: { eu: 'Ondo dago: ikusgai, seinaleztatuta eta eskura.', es: 'Está bien: visible, señalizado y accesible.', en: 'Fine: visible, signposted and within reach.' } },
    { x: 982, y: 672, r: 50, name: { eu: 'Txirbil-ontzia', es: 'Contenedor de virutas', en: 'Chip bin' },
      why: { eu: 'Ondo dago: txirbilak bere ontzian, estalkiarekin.', es: 'Está bien: las virutas en su contenedor, con tapa.', en: 'Fine: chips go in their own bin, with a lid.' } },
    { x: 375, y: 185, r: 80, name: { eu: 'Entzumen-babesaren kartela', es: 'Cartel de protección auditiva', en: 'Hearing protection sign' },
      why: { eu: 'Ondo dago: zarata handiko eremuan belarri-babesa erabiltzea gogorarazten du.', es: 'Está bien: recuerda usar protección auditiva en zona de ruido.', en: 'Fine: it reminds people to wear ear protection in a noisy area.' } }
  ]
});
