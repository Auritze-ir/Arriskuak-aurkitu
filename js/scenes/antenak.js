SCENES.push({
  id: 'antenak',
  icon: '📡',
  title: { eu: 'Antenak teilatuan', es: 'Antenas en la azotea', en: 'Antennas on the roof' },
  svg: `
  <rect width="1600" height="900" fill="#e3eff7"/>
  <rect width="1600" height="300" fill="#b7d3e7"/><rect y="300" width="1600" height="150" fill="#cde1ef"/>
  <!-- Distant city -->
  <g fill="#c3d3df">
    <rect x="40" y="380" width="120" height="200"/><rect x="180" y="330" width="90" height="250"/><rect x="560" y="360" width="140" height="220"/>
    <rect x="1000" y="300" width="110" height="280"/><rect x="1290" y="420" width="130" height="480"/><rect x="1450" y="360" width="150" height="540"/>
  </g>
  <!-- Storm cloud with lightning -->
  <g fill="#5b6577"><circle cx="1330" cy="140" r="56"/><circle cx="1400" cy="120" r="66"/><circle cx="1470" cy="150" r="50"/><rect x="1290" y="140" width="220" height="56" rx="28"/></g>
  <path d="M1400 196 l-30 60 h28 l-24 64 l60 -84 h-30 l24 -40z" fill="#ffc20e"/>
  <g stroke="#7a8796" stroke-width="3" stroke-linecap="round" opacity="0.7"><line x1="1320" y1="210" x2="1310" y2="236"/><line x1="1460" y1="206" x2="1450" y2="232"/><line x1="1340" y1="250" x2="1330" y2="276"/></g>

  <!-- Overhead power line -->
  <rect x="50" y="120" width="18" height="460" fill="#8a6a45"/><rect x="20" y="132" width="80" height="10" fill="#8a6a45"/>
  <path d="M30 132 Q 700 220 1600 150" fill="none" stroke="#1d2433" stroke-width="4"/>
  <path d="M90 132 Q 700 236 1600 172" fill="none" stroke="#1d2433" stroke-width="4"/>

  <!-- Street far below, right of the edge -->
  <rect x="1262" y="820" width="338" height="80" fill="#8d99a6"/>
  ${H.person(1460, 860, { s: 0.3, shirt: '#d35d8e' })}

  <!-- Roof -->
  <rect x="0" y="560" width="1262" height="340" fill="#a3adb7"/>
  <rect x="0" y="556" width="1262" height="14" fill="#7a8796"/>
  <rect x="1250" y="560" width="14" height="340" fill="#6b7682"/>
  <!-- Machine room -->
  <rect x="830" y="330" width="190" height="230" fill="#d0d6dc"/><rect x="820" y="318" width="210" height="16" fill="#9aa6b2"/>
  <rect x="930" y="400" width="66" height="160" fill="#7a8796"/>
  <!-- Ladder leaning badly, not tied, not reaching above the top -->
  <g stroke="#ffc20e" stroke-width="9" stroke-linecap="round"><line x1="700" y1="580" x2="824" y2="372"/><line x1="742" y1="590" x2="836" y2="432"/></g>
  <g stroke="#e0ab00" stroke-width="6"><line x1="716" y1="556" x2="752" y2="572"/><line x1="742" y1="512" x2="774" y2="526"/><line x1="768" y1="468" x2="796" y2="482"/><line x1="794" y1="424" x2="816" y2="436"/></g>
  <!-- Uncovered roof opening -->
  <polygon points="470,640 650,640 690,690 510,690" fill="#1d2433"/>
  <polygon points="380,700 520,700 548,740 408,740" fill="#7a8796" stroke="#5b6577" stroke-width="3"/>

  <!-- Worker raising a mast near the power line (harnessed) -->
  <circle cx="290" cy="600" r="10" fill="none" stroke="#5b6577" stroke-width="5"/>
  <path d="M296 600 q40 -30 70 -120" fill="none" stroke="#f18f01" stroke-width="5"/>
  ${H.person(380, 620, { s: 0.9, shirt: '#2b6cb0', hat: 'helmet', armL: [40, -300], armR: [56, -260] })}
  <path d="M352 420 l56 70 M408 420 l-56 70" stroke="#f18f01" stroke-width="7"/>
  <line x1="430" y1="560" x2="430" y2="186" stroke="#8d99a6" stroke-width="10" stroke-linecap="round"/>
  <line x1="380" y1="196" x2="480" y2="196" stroke="#5b6577" stroke-width="6"/>
  <g stroke="#5b6577" stroke-width="5"><line x1="392" y1="184" x2="392" y2="208"/><line x1="412" y1="182" x2="412" y2="210"/><line x1="448" y1="182" x2="448" y2="210"/><line x1="468" y1="184" x2="468" y2="208"/></g>
  <path d="M436 180 l8 -10 l4 8 l8 -10" fill="none" stroke="#ffc20e" stroke-width="4" stroke-linejoin="round"/>

  <!-- Installer at the edge with no harness -->
  ${H.person(1150, 600, { s: 0.9, dir: 1, shirt: '#f18f01', hat: 'helmet', hatColor: '#ffffff', armL: [60, -270], armR: [82, -240] })}
  <line x1="1215" y1="590" x2="1215" y2="250" stroke="#8d99a6" stroke-width="9" stroke-linecap="round"/>
  <path d="M1190 270 a40 40 0 0 1 50 -40 l-10 50 z" fill="#e6ecf1" stroke="#7a8796" stroke-width="4"/>
  <!-- Tools at the edge -->
  <rect x="1214" y="528" width="68" height="34" rx="5" fill="#d7263d"/><rect x="1236" y="518" width="26" height="12" rx="4" fill="none" stroke="#1d2433" stroke-width="4"/>
  <rect x="1188" y="548" width="60" height="9" rx="4" fill="#5b6577" transform="rotate(-8 1218 552)"/>
  `,
  hazards: [
    { x: 1150, y: 430, r: 100,
      name: { eu: 'Arnesik gabe teilatuaren ertzean', es: 'Sin arnés junto al borde', en: 'No harness at the roof edge' },
      why: { eu: 'Babesik gabeko ertz batetik erortzea hilgarria izan daiteke.', es: 'Una caída desde un borde sin protección puede ser mortal.', en: 'A fall from an unprotected edge can be fatal.' },
      fix: { eu: 'Arnesa bizi-lerro edo ainguratze-puntu bati lotuta, edo ertzean baranda jarrita.', es: 'Arnés anclado a una línea de vida o punto de anclaje, o barandilla en el borde.', en: 'Wear a harness clipped to a lifeline or anchor, or fit a guardrail at the edge.' } },
    { x: 1240, y: 545, r: 55,
      name: { eu: 'Tresnak ertzean', es: 'Herramientas al borde', en: 'Tools at the edge' },
      why: { eu: 'Kalera eror daitezke eta behean dabilen norbaiti jo.', es: 'Pueden caer a la calle y golpear a alguien que pase.', en: 'They can fall to the street and hit someone below.' },
      fix: { eu: 'Gorde tresnak kutxan, ertzetik urrun. Behean, itxi eta seinaleztatu eremua.', es: 'Herramientas en la caja y lejos del borde. Abajo, acotar y señalizar la zona.', en: 'Keep tools in the box, away from the edge. Cordon off and sign the area below.' } },
    { x: 1400, y: 175, r: 120,
      name: { eu: 'Ekaitzarekin lanean', es: 'Trabajar con tormenta', en: 'Working in a thunderstorm' },
      why: { eu: 'Tximistak antenetara erakartzen dira; haizeak eta euriak erorikoak errazten dituzte.', es: 'Los rayos buscan las antenas; viento y lluvia facilitan las caídas.', en: 'Lightning is drawn to antennas; wind and rain make falls more likely.' },
      fix: { eu: 'Gelditu lana ekaitza, haize bortitza edo euria dagoenean.', es: 'Parar el trabajo con tormenta, viento fuerte o lluvia.', en: 'Stop work in storms, strong wind or rain.' } },
    { x: 430, y: 190, r: 80,
      name: { eu: 'Masta linea elektrikotik gertuegi', es: 'Mástil demasiado cerca de la línea eléctrica', en: 'Mast too close to a power line' },
      why: { eu: 'Linea ukitzeak edo arkuak elektrokuzioa eragin dezake.', es: 'Tocar la línea o que salte un arco provoca electrocución.', en: 'Touching the line, or an arc jumping, causes electrocution.' },
      fix: { eu: 'Mantendu segurtasun-distantzia (gutxienez 5 m) edo eskatu linea deskonektatzeko.', es: 'Mantener la distancia de seguridad (mín. 5 m) o pedir el corte de la línea.', en: 'Keep a safe distance (at least 5 m) or ask for the line to be switched off.' } },
    { x: 580, y: 665, r: 85,
      name: { eu: 'Zulo estali gabea', es: 'Hueco sin proteger', en: 'Unprotected roof opening' },
      why: { eu: 'Teilatuko zulotik eror daiteke.', es: 'Se puede caer por el hueco de la cubierta.', en: 'Someone can fall through the opening.' },
      fix: { eu: 'Estali zuloa tapa finkoarekin edo jarri baranda eta seinaleak.', es: 'Tapar el hueco con una tapa fija o poner barandilla y señales.', en: 'Cover it with a fixed lid or fit a guardrail and signs.' } },
    { x: 775, y: 480, r: 85,
      name: { eu: 'Eskailera gaizki jarrita', es: 'Escalera mal colocada', en: 'Ladder set up badly' },
      why: { eu: 'Ez dago lotuta, inklinazioa okerra da eta ez da goiko ertzetik irteten: irristatu eta erori daiteke.', es: 'No está atada, la inclinación es incorrecta y no sobresale del borde: puede deslizar y caer.', en: 'It is not tied, the angle is wrong and it does not reach above the top: it can slip and fall.' },
      fix: { eu: 'Lotu eskailera, jarri 75°-ko angeluan (1:4) eta goiko ertzetik 1 m irten dadila.', es: 'Atar la escalera, a 75° (1:4) y sobresaliendo 1 m del borde superior.', en: 'Tie the ladder, set it at 75° (1:4) and let it extend 1 m above the top.' } }
  ],
  safe: [
    { x: 380, y: 460, r: 60, name: { eu: 'Arnesa lotuta', es: 'Arnés anclado', en: 'Harness clipped on' },
      why: { eu: 'Ondo dago: langile honek arnesa ainguratze-puntu bati lotuta du.', es: 'Está bien: esta persona lleva el arnés anclado a un punto fijo.', en: 'Fine: this worker’s harness is clipped to an anchor point.' } }
  ]
});
