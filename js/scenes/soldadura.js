SCENES.push({
  id: 'soldadura',
  icon: '🔥',
  title: { eu: 'Soldadura tailerra', es: 'Taller de soldadura', en: 'Welding workshop' },
  svg: `
  ${H.room('#e4e2df', '#bfc3c7', '#aeb3b8')}
  ${H.lamp(700)}
  ${H.firstAid(1150, 240)}

  <!-- Gas cylinders, not chained -->
  <rect x="60" y="300" width="16" height="140" fill="#7a8796"/>
  <path d="M76 330 q14 40 4 90" fill="none" stroke="#5b6577" stroke-width="5" stroke-dasharray="6 4"/>
  <rect x="96" y="360" width="56" height="260" rx="24" fill="#7a1f2b"/>
  <rect x="112" y="332" width="24" height="32" rx="4" fill="#5b6577"/><circle cx="124" cy="326" r="10" fill="#1d2433"/>
  <g transform="rotate(10 196 620)">
    <rect x="170" y="370" width="56" height="250" rx="24" fill="#2b4a6f"/>
    <rect x="170" y="370" width="56" height="50" rx="24" fill="#f2f4f7"/>
    <rect x="186" y="342" width="24" height="32" rx="4" fill="#5b6577"/><circle cx="198" cy="336" r="10" fill="#1d2433"/>
  </g>
  <!-- Damaged hose -->
  <path d="M124 330 C 30 330, 30 700, 190 765 S 345 770, 335 620" fill="none" stroke="#c0392b" stroke-width="9" stroke-linecap="round"/>
  <path d="M214 340 C 300 360, 300 700, 250 770" fill="none" stroke="#1e7a4a" stroke-width="9" stroke-linecap="round"/>
  <path d="M240 752 l10 14 l10 -12" fill="none" stroke="#1d2433" stroke-width="4"/>
  <g fill="#cfd8e0" opacity="0.9"><circle cx="272" cy="750" r="12"/><circle cx="290" cy="736" r="9"/><circle cx="304" cy="724" r="6"/></g>

  <!-- Welding table -->
  <rect x="300" y="470" width="400" height="22" fill="#5b6577"/>
  <rect x="316" y="492" width="16" height="128" fill="#4a5363"/><rect x="668" y="492" width="16" height="128" fill="#4a5363"/>
  <rect x="380" y="448" width="150" height="22" fill="#8d99a6"/><rect x="520" y="440" width="18" height="30" fill="#8d99a6"/>
  <!-- Flammables under the table -->
  <rect x="370" y="548" width="120" height="72" fill="#c49a6c" stroke="#9c7647" stroke-width="3"/>
  <path d="M370 548 l20 -18 h100 l-20 18" fill="#d1aa7c" stroke="#9c7647" stroke-width="3"/>
  <rect x="512" y="560" width="54" height="60" rx="6" fill="#d7263d"/><rect x="526" y="550" width="26" height="12" fill="#5b6577"/>
  <polygon points="539,572 552,596 526,596" fill="#ffc20e"/><path d="M539 576 q6 8 0 16 q-6 -8 0 -16" fill="#d7263d"/>
  <!-- Arc flash + sparks + fumes -->
  <circle cx="462" cy="460" r="40" fill="#bfe9ff" opacity="0.6"/>
  <polygon points="462,430 470,452 494,460 470,468 462,490 454,468 430,460 454,452" fill="#ffffff"/>
  <g stroke="#ff8a3d" stroke-width="4" stroke-linecap="round">
    <line x1="456" y1="480" x2="430" y2="540"/><line x1="466" y1="482" x2="476" y2="550"/><line x1="470" y1="476" x2="520" y2="540"/><line x1="452" y1="478" x2="410" y2="520"/>
  </g>
  <g fill="#ffc20e"><circle cx="428" cy="548" r="4"/><circle cx="480" cy="560" r="4"/><circle cx="524" cy="548" r="4"/></g>
  ${H.smoke(430, 360, 1.3, '#8d99a6')}

  <!-- Welder WITHOUT mask -->
  ${H.person(600, 700, { s: 0.95, dir: -1, shirt: '#2b4a6f', apron: '#8a5a32', hands: '#8a5a32', armL: [-144, -252], armR: [-90, -215] })}
  <line x1="463" y1="463" x2="470" y2="470" stroke="#1d2433" stroke-width="10" stroke-linecap="round"/>

  <!-- Fume extractor pointing away -->
  <rect x="840" y="300" width="40" height="40" rx="6" fill="#5b6577"/>
  <path d="M860 320 L 900 200 L 1010 150" fill="none" stroke="#ffc20e" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="900" cy="200" r="10" fill="#5b6577"/>
  <path d="M1000 120 l60 10 l-10 60 z" fill="#ffc20e" stroke="#d6a300" stroke-width="3"/>

  <!-- Bystander watching the arc unprotected -->
  ${H.person(1000, 700, { s: 0.9, dir: -1, shirt: '#4a7a5c', hair: 'short', armL: [-30, -120], armR: [30, -120] })}

  <!-- Fire extinguisher (safe) -->
  ${H.fireExt(1260, 600)}
  <!-- PPE hanging on hooks (safe) -->
  <rect x="1360" y="170" width="200" height="12" rx="4" fill="#7a8796"/>
  <path d="M1400 182 v18 M1500 182 v18" stroke="#5b6577" stroke-width="6"/>
  <path d="M1370 200 h60 v170 h-60 z" fill="#8a5a32"/>
  <rect x="1470" y="200" width="66" height="72" rx="14" fill="#2d3340"/><rect x="1484" y="222" width="38" height="16" rx="3" fill="#3fa34d"/>
  <path d="M1458 300 q12 -10 24 0 v50 h-24 z M1500 300 q12 -10 24 0 v50 h-24 z" fill="#8a5a32"/>
  `,
  hazards: [
    { x: 600, y: 430, r: 66,
      name: { eu: 'Soldadura-maskararik gabe', es: 'Soldando sin pantalla', en: 'Welding without a mask' },
      why: { eu: 'Arkuaren argi ultramoreak begiak eta azala erretzen ditu (begi-erredura).', es: 'La luz ultravioleta del arco quema ojos y piel (queratitis).', en: 'The arc’s ultraviolet light burns eyes and skin (arc eye).' },
      fix: { eu: 'Erabili beti soldadura-maskara, iragazki egokiarekin.', es: 'Usar siempre pantalla de soldar con el filtro adecuado.', en: 'Always use a welding mask with the correct filter.' } },
    { x: 160, y: 470, r: 100,
      name: { eu: 'Gas-botilak lotu gabe', es: 'Botellas de gas sin sujetar', en: 'Gas cylinders not secured' },
      why: { eu: 'Botila bat eroriz gero balbula hautsi eta botila jaurti daiteke, edo gasa isuri.', es: 'Si una botella cae, la válvula se puede romper: la botella sale disparada o hay fuga.', en: 'If a cylinder falls, the valve can break: it can shoot off or leak gas.' },
      fix: { eu: 'Botilak zutik eta katez edo euskarriz lotuta beti.', es: 'Botellas siempre de pie y sujetas con cadena o soporte.', en: 'Keep cylinders upright and chained or strapped at all times.' } },
    { x: 470, y: 580, r: 72,
      name: { eu: 'Material sukoiak txinparten azpian', es: 'Material inflamable bajo las chispas', en: 'Flammables under the sparks' },
      why: { eu: 'Txinpartek kartoia edo disolbatzailea piztu dezakete: sutea.', es: 'Las chispas pueden prender el cartón o el disolvente: incendio.', en: 'Sparks can ignite the cardboard or solvent: fire.' },
      fix: { eu: 'Kendu material sukoiak lan-eremutik (gutxienez 10 m) edo estali su-mantekin.', es: 'Retirar los inflamables de la zona (al menos 10 m) o cubrirlos con mantas ignífugas.', en: 'Move flammables away (at least 10 m) or cover them with fire blankets.' } },
    { x: 440, y: 270, r: 85,
      name: { eu: 'Keak: erauzgailua urrun', es: 'Humos: extractor mal colocado', en: 'Fumes: extractor pointing away' },
      why: { eu: 'Soldadura-keak toxikoak dira, eta erauzgailua beste aldera begira dago.', es: 'Los humos de soldadura son tóxicos y el extractor apunta a otro lado.', en: 'Welding fumes are toxic and the extractor is pointing elsewhere.' },
      fix: { eu: 'Jarri erauzgailuaren ahoa soldadura-puntutik gertu.', es: 'Colocar la boca del extractor cerca del punto de soldadura.', en: 'Put the extractor hood close to the welding point.' } },
    { x: 260, y: 755, r: 75,
      name: { eu: 'Gas-mahuka hondatuta', es: 'Manguera de gas dañada', en: 'Damaged gas hose' },
      why: { eu: 'Mahuka pitzatuak gasa isurtzen du: sute edo leherketa arriskua.', es: 'La manguera agrietada pierde gas: riesgo de incendio o explosión.', en: 'A cracked hose leaks gas: risk of fire or explosion.' },
      fix: { eu: 'Aldatu mahuka hondatuak eta egiaztatu ihesak ur xaboidunarekin.', es: 'Cambiar las mangueras dañadas y comprobar fugas con agua jabonosa.', en: 'Replace damaged hoses and check for leaks with soapy water.' } },
    { x: 1000, y: 445, r: 70,
      name: { eu: 'Ondokoa babesik gabe begira', es: 'Compañero mirando sin protección', en: 'Bystander watching unprotected' },
      why: { eu: 'Arkuaren argiak ondoan daudenen begiak ere kaltetzen ditu.', es: 'La luz del arco también daña los ojos de quien está cerca.', en: 'Arc light also damages the eyes of people nearby.' },
      fix: { eu: 'Jarri soldadura-gortinak eta ez begiratu arkura babesik gabe.', es: 'Poner cortinas de soldadura y no mirar el arco sin protección.', en: 'Put up welding curtains and never look at the arc unprotected.' } }
  ],
  safe: [
    { x: 1262, y: 500, r: 60, name: { eu: 'Su-itzalgailua', es: 'Extintor', en: 'Fire extinguisher' },
      why: { eu: 'Ondo dago: soldadura-eremutik gertu eta eskura.', es: 'Está bien: cerca de la zona de soldadura y accesible.', en: 'Fine: close to the welding area and within reach.' } },
    { x: 1460, y: 270, r: 95, name: { eu: 'Babes-ekipoak eskegita', es: 'EPIs colgados', en: 'PPE on hooks' },
      why: { eu: 'Ondo dago: mantala, maskara eta eskularruak ordenatuta eta prest.', es: 'Está bien: mandil, pantalla y guantes ordenados y listos.', en: 'Fine: apron, mask and gloves stored and ready to use.' } },
    { x: 1150, y: 240, r: 50, name: { eu: 'Botikina', es: 'Botiquín', en: 'First aid kit' },
      why: { eu: 'Ondo dago: ikusgai eta eskura.', es: 'Está bien: visible y accesible.', en: 'Fine: visible and within reach.' } }
  ]
});
