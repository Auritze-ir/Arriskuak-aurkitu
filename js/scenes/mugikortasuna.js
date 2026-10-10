(() => {
// Side view car, scaled. (x, y) = rear-left on the ground; faces right unless flip.
function car(x, y, color, flip, s = 0.8, driver = '') {
  const t = flip ? `translate(${x + 480 * s} ${y}) scale(${-s} ${s})` : `translate(${x} ${y}) scale(${s})`;
  return `<g transform="${t}">
    <path d="M0 -60 q0 -80 40 -90 h400 q40 10 40 60 v30 q0 20 -20 20 h-440 q-20 0 -20 -20z" fill="${color}"/>
    <path d="M110 -150 L160 -230 H330 L392 -150 Z" fill="${color}"/>
    <path d="M128 -152 L168 -216 H242 V-152 Z M254 -152 V-216 H322 L370 -152 Z" fill="#bfe0fb"/>
    ${driver}
    <rect x="456" y="-120" width="22" height="16" rx="4" fill="#ffe08a"/>
    <rect x="2" y="-122" width="16" height="18" rx="4" fill="#d7263d"/>
    <line x1="240" y1="-140" x2="240" y2="-50" stroke="rgba(0,0,0,0.18)" stroke-width="3"/>
    <circle cx="100" cy="-34" r="46" fill="#1d2433"/><circle cx="100" cy="-34" r="20" fill="#aab4be"/>
    <circle cx="380" cy="-34" r="46" fill="#1d2433"/><circle cx="380" cy="-34" r="20" fill="#aab4be"/>
  </g>`;
}
// Driver seen through the front window, holding a phone (local car coords, before flip)
const phoneDriver = `<circle cx="300" cy="-182" r="22" fill="#e0ac85"/>
  <path d="M278 -186 q4 -26 26 -24 q18 2 18 22 q-10 -12 -44 2z" fill="#3b2a20"/>
  <path d="M290 -150 L332 -172" stroke="#2b6cb0" stroke-width="14" stroke-linecap="round"/>
  <rect x="328" y="-196" width="14" height="26" rx="3" fill="#1d2433"/><rect x="331" y="-192" width="8" height="16" fill="#7fd1f0"/>`;

SCENES.push({
  id: 'mugikortasuna',
  icon: '🚦',
  title: { eu: 'Bidegurutzea', es: 'El cruce', en: 'The crossroads' },
  svg: `
  <rect width="1600" height="900" fill="#cfe3f0"/>
  <!-- Buildings -->
  <rect x="0" y="60" width="330" height="320" fill="#e8c9a0"/><rect x="330" y="120" width="300" height="260" fill="#c9d6c2"/>
  <rect x="630" y="40" width="360" height="340" fill="#e3b8b0"/><rect x="990" y="100" width="300" height="280" fill="#c7d3e3"/><rect x="1290" y="70" width="310" height="310" fill="#e8dcb8"/>
  <g fill="#ffffff" opacity="0.75">
    <rect x="40" y="110" width="60" height="70"/><rect x="140" y="110" width="60" height="70"/><rect x="240" y="110" width="60" height="70"/>
    <rect x="370" y="170" width="60" height="70"/><rect x="480" y="170" width="60" height="70"/>
    <rect x="680" y="90" width="60" height="70"/><rect x="790" y="90" width="60" height="70"/><rect x="900" y="90" width="60" height="70"/>
    <rect x="680" y="200" width="60" height="70"/><rect x="900" y="200" width="60" height="70"/>
    <rect x="1030" y="150" width="60" height="70"/><rect x="1150" y="150" width="60" height="70"/>
    <rect x="1330" y="120" width="60" height="70"/><rect x="1450" y="120" width="60" height="70"/>
  </g>
  <rect x="380" y="300" width="200" height="80" fill="#3b4453"/><rect x="380" y="290" width="200" height="16" fill="#d7263d"/>
  <!-- Pavements and road -->
  <rect y="380" width="1600" height="92" fill="#d9d4cc"/><rect y="466" width="1600" height="8" fill="#a8a29a"/>
  <rect y="474" width="1600" height="326" fill="#5b6370"/>
  <rect y="800" width="1600" height="8" fill="#a8a29a"/><rect y="808" width="1600" height="92" fill="#d9d4cc"/>
  <g fill="#f2f4f7">${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 110 - 20}" y="632" width="60" height="8"/>`).join('')}</g>
  <g fill="#f2f4f7">${Array.from({ length: 8 }, (_, i) => `<rect x="700" y="${484 + i * 40}" width="160" height="22"/>`).join('')}</g>
  <rect x="676" y="480" width="8" height="150" fill="#f2f4f7"/>
  <path d="M470 560 h60 v-14 l30 24 l-30 24 v-14 h-60z" fill="#f2f4f7" opacity="0.9"/>
  <path d="M620 730 h-60 v-14 l-30 24 l30 24 v-14 h60z" fill="#f2f4f7" opacity="0.9"/>

  <!-- Speed limit sign (safe) -->
  <rect x="116" y="300" width="8" height="170" fill="#7a8796"/>
  <circle cx="120" cy="290" r="40" fill="#fff" stroke="#d7263d" stroke-width="10"/>
  <text x="120" y="304" text-anchor="middle" font-family="Rubik, sans-serif" font-size="36" font-weight="800" fill="#1d2433">30</text>
  <!-- Traffic light: red -->
  <rect x="652" y="250" width="12" height="220" fill="#3b4453"/>
  <rect x="632" y="180" width="52" height="128" rx="10" fill="#1d2433"/>
  <circle cx="658" cy="206" r="15" fill="#ff3b4e"/><circle cx="658" cy="244" r="15" fill="#4a3a1a"/><circle cx="658" cy="282" r="15" fill="#1d3a2a"/>

  <!-- Car parked on the pavement -->
  <g transform="rotate(-3 1150 460)">${car(1150, 462, '#7a8796', true, 0.8)}</g>

  <!-- Car running the red light -->
  ${car(600, 626, '#2b6cb0', false, 0.8)}
  <g stroke="#f2f4f7" stroke-width="5" stroke-linecap="round" opacity="0.8"><line x1="540" y1="540" x2="580" y2="540"/><line x1="520" y1="570" x2="575" y2="570"/><line x1="540" y1="600" x2="580" y2="600"/></g>

  <!-- Car whose driver is on the phone -->
  ${car(1100, 786, '#d7263d', true, 0.8, phoneDriver)}

  <!-- Cyclist without helmet, against traffic -->
  <g>
    <circle cx="140" cy="584" r="38" fill="none" stroke="#1d2433" stroke-width="7"/><circle cx="260" cy="584" r="38" fill="none" stroke="#1d2433" stroke-width="7"/>
    <path d="M140 584 L180 530 L240 530 L260 584 M180 530 L206 584 L240 530 M174 516 h-24 M206 584 l30 -70" fill="none" stroke="#2f7d6d" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
  </g>
  ${H.person(214, 590, { s: 0.55, dir: -1, shirt: '#f18f01', armL: [-90, -170], armR: [-70, -160] })}

  <!-- Pedestrian crossing away from the zebra, on the phone, headphones -->
  ${H.person(360, 770, { s: 0.72, dir: -1, shirt: '#6c4ab6', earmuffs: true, armL: [-30, -200], armR: [10, -190] })}
  <rect x="330" y="616" width="16" height="24" rx="3" fill="#1d2433" transform="rotate(-20 338 628)"/>

  <!-- Two people on one e-scooter on the pavement -->
  <g>
    <line x1="960" y1="886" x2="1100" y2="886" stroke="#1d2433" stroke-width="8" stroke-linecap="round"/>
    <circle cx="968" cy="886" r="12" fill="#1d2433"/><circle cx="1092" cy="886" r="12" fill="#1d2433"/>
    <line x1="1092" y1="884" x2="1080" y2="740" stroke="#1d2433" stroke-width="7"/><line x1="1062" y1="740" x2="1098" y2="740" stroke="#1d2433" stroke-width="7" stroke-linecap="round"/>
  </g>
  ${H.person(1010, 880, { s: 0.5, shirt: '#d35d8e', hair: 'long', armL: [100, -270], armR: [130, -280] })}
  ${H.person(1050, 880, { s: 0.52, shirt: '#2b6cb0', armL: [50, -270], armR: [64, -290] })}

  <!-- Pedestrian waiting at the kerb (safe) -->
  ${H.person(640, 890, { s: 0.5, shirt: '#1e9e5a', dir: 1 })}
  `,
  hazards: [
    { x: 850, y: 545, r: 110,
      name: { eu: 'Semaforoa gorrian pasatzen', es: 'Saltarse el semáforo en rojo', en: 'Running a red light' },
      why: { eu: 'Zebra-bidean gurutzatzen ari diren oinezkoak harrapa ditzake.', es: 'Puede atropellar a los peatones que cruzan por el paso.', en: 'It can hit pedestrians using the crossing.' },
      fix: { eu: 'Gelditu beti gorrian, gelditze-marraren aurretik.', es: 'Detenerse siempre en rojo, antes de la línea de detención.', en: 'Always stop at red, before the stop line.' } },
    { x: 1250, y: 650, r: 75,
      name: { eu: 'Gidatzen, mugikorra erabiltzen', es: 'Conducir usando el móvil', en: 'Driving while using a phone' },
      why: { eu: 'Arreta galtzen da: errepidetik begiak kentzea istripuen kausa nagusietako bat da.', es: 'Se pierde la atención: apartar la vista de la carretera es una de las principales causas de accidente.', en: 'Attention is lost: taking your eyes off the road is a leading cause of crashes.' },
      fix: { eu: 'Mugikorra «gidatzen» moduan; deiak eta mezuak autoa geldituta bakarrik.', es: 'Móvil en modo «conducción»; llamadas y mensajes solo con el coche parado.', en: 'Put the phone in driving mode; calls and messages only when parked.' } },
    { x: 360, y: 670, r: 90,
      name: { eu: 'Oinezkoa zebra-bidetik kanpo, mugikorrari begira', es: 'Peatón fuera del paso, mirando el móvil', en: 'Pedestrian crossing away from the zebra, on a phone' },
      why: { eu: 'Gidariek ez dute espero, eta oinezkoak ez ditu autoak ikusten ezta entzuten ere.', es: 'Los conductores no lo esperan, y el peatón ni ve ni oye los coches.', en: 'Drivers do not expect them, and they can neither see nor hear the traffic.' },
      fix: { eu: 'Gurutzatu zebra-bidetik, begiratu bi aldeetara eta utzi mugikorra.', es: 'Cruzar por el paso de cebra, mirar a ambos lados y dejar el móvil.', en: 'Use the zebra crossing, look both ways and put the phone away.' } },
    { x: 1040, y: 800, r: 90,
      name: { eu: 'Bi pertsona patinete batean, espaloitik', es: 'Dos personas en un patinete, por la acera', en: 'Two people on one e-scooter, on the pavement' },
      why: { eu: 'Patinetea pertsona bakarrarentzat da; espaloian oinezkoak harrapa ditzake.', es: 'El patinete es para una sola persona; por la acera puede atropellar a peatones.', en: 'Scooters are for one person; on the pavement they can hit pedestrians.' },
      fix: { eu: 'Pertsona bakarra, kaskoarekin, eta bidegorritik edo galtzadatik, inoiz ez espaloitik.', es: 'Una sola persona, con casco, por el carril bici o la calzada, nunca por la acera.', en: 'One rider, with a helmet, on the cycle lane or road, never the pavement.' } },
    { x: 200, y: 540, r: 85,
      name: { eu: 'Bizikletaria kaskorik gabe eta kontrako noranzkoan', es: 'Ciclista sin casco y en sentido contrario', en: 'Cyclist with no helmet, against the traffic' },
      why: { eu: 'Aurrez aurreko talka-arriskua; erortzean buruko lesio larriak.', es: 'Riesgo de choque frontal; en una caída, lesiones graves en la cabeza.', en: 'Risk of a head-on crash; serious head injuries in a fall.' },
      fix: { eu: 'Ibili trafikoaren noranzkoan eta erabili kaskoa.', es: 'Circular en el sentido del tráfico y usar casco.', en: 'Ride with the traffic and wear a helmet.' } },
    { x: 1340, y: 395, r: 110,
      name: { eu: 'Autoa espaloian aparkatuta', es: 'Coche aparcado en la acera', en: 'Car parked on the pavement' },
      why: { eu: 'Oinezkoak (gurpil-aulkiak, haur-kotxeak) errepidera ateratzera behartzen ditu.', es: 'Obliga a los peatones (sillas de ruedas, carritos) a bajar a la calzada.', en: 'It forces pedestrians (wheelchairs, prams) out onto the road.' },
      fix: { eu: 'Aparkatu baimendutako lekuetan bakarrik.', es: 'Aparcar solo en lugares permitidos.', en: 'Only park where it is allowed.' } }
  ],
  safe: [
    { x: 640, y: 815, r: 60, name: { eu: 'Oinezkoa zain', es: 'Peatón esperando', en: 'Pedestrian waiting' },
      why: { eu: 'Ondo dago: espaloian itxaroten du, gurutzatzeko txanda iritsi arte.', es: 'Está bien: espera en la acera hasta que le toque cruzar.', en: 'Fine: waiting on the kerb until it is safe to cross.' } },
    { x: 120, y: 290, r: 55, name: { eu: '30 km/h seinalea', es: 'Señal de 30 km/h', en: '30 km/h sign' },
      why: { eu: 'Ondo dago: hirigunean abiadura mugatzeak istripuak eta haien larritasuna murrizten ditu.', es: 'Está bien: limitar la velocidad en ciudad reduce accidentes y su gravedad.', en: 'Fine: lower speed limits in town reduce crashes and their severity.' } }
  ]
});
})();
