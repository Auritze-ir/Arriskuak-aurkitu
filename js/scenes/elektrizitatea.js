SCENES.push({
  id: 'elektrizitatea',
  icon: '⚡',
  title: { eu: 'Elektrizitate tailerra', es: 'Taller de electricidad', en: 'Electrical workshop' },
  svg: `
  ${H.room()}
  ${H.lamp(780)}
  <!-- Safety poster -->
  <rect x="160" y="110" width="170" height="160" rx="8" fill="#1e9e5a"/>
  <circle cx="245" cy="170" r="38" fill="#fff"/>
  <path d="M222 182 q23 -50 46 0 z" fill="#1e9e5a"/><rect x="216" y="181" width="58" height="8" rx="4" fill="#1e9e5a"/>
  <rect x="182" y="222" width="126" height="12" rx="4" fill="#fff"/><rect x="200" y="242" width="90" height="10" rx="4" fill="#fff" opacity="0.8"/>
  ${H.firstAid(942, 235)}
  <!-- Open electrical panel -->
  <rect x="1080" y="170" width="160" height="230" rx="6" fill="#8d99a6"/>
  <rect x="1092" y="182" width="136" height="206" fill="#3b4453"/>
  <g fill="#e6ecf1"><rect x="1104" y="198" width="22" height="40" rx="3"/><rect x="1132" y="198" width="22" height="40" rx="3"/>
    <rect x="1160" y="198" width="22" height="40" rx="3"/><rect x="1188" y="198" width="22" height="40" rx="3"/>
    <rect x="1104" y="256" width="22" height="40" rx="3"/><rect x="1132" y="256" width="22" height="40" rx="3"/></g>
  <path d="M1240 172 l70 -18 v262 l-70 -16 z" fill="#aab4be" stroke="#8d99a6" stroke-width="3"/>
  <path d="M1170 300 q-10 60 30 80 q30 20 10 70" fill="none" stroke="#c0392b" stroke-width="7" stroke-linecap="round"/>
  <path d="M1196 300 q20 50 -10 90 q-20 30 20 62" fill="none" stroke="#2b6cb0" stroke-width="7" stroke-linecap="round"/>
  <path d="M1150 300 q-30 70 -6 110" fill="none" stroke="#5b4636" stroke-width="7" stroke-linecap="round"/>
  <g stroke="#b87333" stroke-width="4" stroke-linecap="round"><line x1="1210" y1="452" x2="1222" y2="466"/><line x1="1210" y1="452" x2="1204" y2="468"/>
    <line x1="1144" y1="410" x2="1150" y2="426"/><line x1="1144" y1="410" x2="1134" y2="424"/></g>
  <path d="M1232 470 l12 -14 l4 12 l14 -12" fill="none" stroke="#ffc20e" stroke-width="5" stroke-linejoin="round"/>
  ${H.warn(1176, 128)}
  ${H.fireExt(1300, 586)}
  <!-- Blocked emergency exit -->
  ${H.exitSign(1455, 270)}
  <rect x="1385" y="310" width="140" height="310" fill="#5c7a91"/><rect x="1395" y="322" width="120" height="290" fill="#6f8ea6"/>
  <rect x="1400" y="440" width="110" height="12" rx="6" fill="#d0d7de"/>
  <rect x="1350" y="520" width="110" height="100" fill="#c49a6c" stroke="#9c7647" stroke-width="3"/>
  <rect x="1440" y="470" width="100" height="150" fill="#b88a5a" stroke="#9c7647" stroke-width="3"/>
  <rect x="1370" y="448" width="80" height="72" fill="#d1aa7c" stroke="#9c7647" stroke-width="3"/>
  <line x1="1350" y1="560" x2="1460" y2="560" stroke="#9c7647" stroke-width="3"/><line x1="1440" y1="540" x2="1540" y2="540" stroke="#9c7647" stroke-width="3"/>
  <!-- Machine with guard -->
  <rect x="860" y="430" width="160" height="190" rx="10" fill="#2b6cb0"/>
  <rect x="876" y="446" width="128" height="70" rx="6" fill="#1d2433"/><rect x="890" y="462" width="60" height="10" rx="3" fill="#7fd1a7"/>
  <circle cx="980" cy="480" r="12" fill="#d7263d"/>
  <rect x="876" y="534" width="128" height="70" rx="6" fill="#ffc20e" opacity="0.9"/>
  <g stroke="#1d2433" stroke-width="5"><line x1="886" y1="544" x2="994" y2="594"/><line x1="886" y1="594" x2="994" y2="544"/></g>
  <!-- Workbench -->
  <rect x="90" y="460" width="480" height="26" rx="4" fill="#9c7647"/>
  <rect x="110" y="486" width="18" height="140" fill="#7a5a35"/><rect x="530" y="486" width="18" height="140" fill="#7a5a35"/>
  <rect x="128" y="560" width="402" height="10" fill="#7a5a35"/>
  <rect x="150" y="424" width="70" height="36" rx="5" fill="#ffc20e"/><rect x="160" y="432" width="36" height="18" rx="3" fill="#1d2433"/>
  <circle cx="208" cy="441" r="6" fill="#1d2433"/><rect x="260" y="440" width="90" height="20" rx="3" fill="#5b6577"/>
  <rect x="440" y="420" width="44" height="40" fill="#5b6577"/><rect x="430" y="408" width="110" height="16" fill="#8d99a6"/>
  <!-- Daisy-chained power strips -->
  <rect x="300" y="640" width="120" height="26" rx="6" fill="#f2f4f7" stroke="#8d99a6" stroke-width="3"/>
  <rect x="200" y="680" width="110" height="24" rx="6" fill="#f2f4f7" stroke="#8d99a6" stroke-width="3"/>
  <g fill="#1d2433"><rect x="312" y="628" width="16" height="20" rx="3"/><rect x="336" y="628" width="16" height="20" rx="3"/>
    <rect x="360" y="628" width="16" height="20" rx="3"/><rect x="384" y="628" width="16" height="20" rx="3"/>
    <rect x="212" y="668" width="16" height="20" rx="3"/><rect x="236" y="668" width="16" height="20" rx="3"/>
    <rect x="260" y="668" width="16" height="20" rx="3"/><rect x="284" y="668" width="16" height="20" rx="3"/></g>
  <g fill="none" stroke="#1d2433" stroke-width="5" stroke-linecap="round">
    <path d="M320 628 q-10 -60 -60 -130"/><path d="M344 628 q0 -70 60 -110"/><path d="M368 628 q20 -40 80 -50"/>
    <path d="M220 668 q-40 -40 -90 -80"/><path d="M244 668 q-10 -60 30 -100"/><path d="M268 668 q20 -60 -40 -110"/>
    <path d="M310 692 q20 0 10 -26"/><path d="M200 692 q-60 10 -120 -60"/></g>
  <path d="M398 622 q8 -10 4 -20 q10 8 8 18" fill="#ff8a3d"/>
  <!-- Cable across walkway -->
  <path d="M420 654 C 520 660, 560 790, 700 800 S 860 760, 900 620" fill="none" stroke="#1d2433" stroke-width="9" stroke-linecap="round"/>
  <path d="M420 654 C 520 660, 560 790, 700 800 S 860 760, 900 620" fill="none" stroke="#f18f01" stroke-width="4" stroke-dasharray="2 18" stroke-linecap="round"/>
  <!-- Water with extension reel -->
  ${H.puddle(1130, 760, 135)}
  <rect x="1215" y="650" width="44" height="64" rx="6" fill="#5b6577"/><path d="M1206 714 l62 -2 l-16 46 h-30 z" fill="#8d99a6"/>
  <circle cx="1110" cy="726" r="44" fill="#f18f01"/><circle cx="1110" cy="726" r="30" fill="#1d2433"/><circle cx="1110" cy="726" r="12" fill="#f18f01"/>
  <rect x="1094" y="764" width="32" height="10" fill="#5b6577"/>
  <path d="M1150 740 q60 20 120 -30 q40 -40 30 -90" fill="none" stroke="#1d2433" stroke-width="6" stroke-linecap="round"/>
  <!-- Ladder + worker on top -->
  <g stroke="#8d99a6" stroke-width="10" stroke-linecap="round"><line x1="690" y1="620" x2="732" y2="320"/><line x1="800" y1="620" x2="758" y2="320"/></g>
  <g stroke="#aab4be" stroke-width="7" stroke-linecap="round"><line x1="702" y1="540" x2="788" y2="540"/><line x1="712" y1="460" x2="777" y2="460"/><line x1="723" y1="385" x2="767" y2="385"/></g>
  <rect x="722" y="310" width="48" height="14" rx="3" fill="#5b6577"/>
  ${H.person(746, 312, { s: 0.74, shirt: '#f18f01', hat: 'helmet', armR: [40, -330], armL: [-50, -170] })}
  <!-- Worker grinding without goggles -->
  ${H.person(614, 640, { s: 0.92, dir: -1, armL: [-80, -190], armR: [-60, -165], vest: '#ffc20e' })}
  <rect x="510" y="440" width="58" height="26" rx="8" fill="#5b6577"/>
  <circle cx="512" cy="430" r="26" fill="#aab4be" stroke="#5b6577" stroke-width="4"/>
  <g stroke="#ff8a3d" stroke-width="4" stroke-linecap="round"><line x1="500" y1="408" x2="556" y2="360"/><line x1="504" y1="404" x2="586" y2="372"/>
    <line x1="496" y1="410" x2="530" y2="350"/><line x1="508" y1="406" x2="570" y2="392"/></g>
  `,
  hazards: [
    { x: 614, y: 380, r: 70,
      name: { eu: 'Babes-betaurrekorik gabe', es: 'Sin gafas de protección', en: 'No safety goggles' },
      why: { eu: 'Harrigailuarekin txinpartak eta metal-zatiak ateratzen dira, eta begietara jo dezakete.', es: 'La amoladora proyecta chispas y partículas metálicas que pueden dañar los ojos.', en: 'The angle grinder throws sparks and metal particles that can hit the eyes.' },
      fix: { eu: 'Erabili beti babes-betaurrekoak edo aurpegi-pantaila.', es: 'Usar siempre gafas de protección o pantalla facial.', en: 'Always wear safety goggles or a face shield.' } },
    { x: 1175, y: 300, r: 115,
      name: { eu: 'Koadro elektrikoa irekita eta kable biluziak', es: 'Cuadro eléctrico abierto y cables pelados', en: 'Open electrical panel with bare wires' },
      why: { eu: 'Kable biluziak ukitzeak elektrokuzioa eragin dezake.', es: 'Tocar cables pelados puede provocar una electrocución.', en: 'Touching bare wires can cause electrocution.' },
      fix: { eu: 'Koadroa itxita eta giltzaz. Konponketak tentsiorik gabe eta pertsona baimenduek bakarrik.', es: 'Cuadro cerrado con llave. Reparaciones sin tensión y solo por personal autorizado.', en: 'Keep the panel locked. Repairs only with the power off and by authorised staff.' } },
    { x: 320, y: 660, r: 95,
      name: { eu: 'Luzagarriak kateatuta (gainkarga)', es: 'Regletas encadenadas (sobrecarga)', en: 'Daisy-chained power strips (overload)' },
      why: { eu: 'Luzagarri bat bestean konektatzeak gainkarga eragiten du; berotu eta sua har dezake.', es: 'Conectar una regleta a otra sobrecarga la instalación; puede calentarse e incendiarse.', en: 'Plugging one strip into another overloads it; it can overheat and catch fire.' },
      fix: { eu: 'Erabili luzagarri bakarra, potentzia egokia duena. Ez kateatu inoiz.', es: 'Usar una sola regleta de potencia adecuada. No encadenarlas nunca.', en: 'Use a single strip with the right power rating. Never chain them.' } },
    { x: 680, y: 790, r: 95,
      name: { eu: 'Kablea pasabidetik', es: 'Cable cruzando el pasillo', en: 'Cable across the walkway' },
      why: { eu: 'Pasabideko kable batek estropezuak eta erorikoak eragin ditzake, eta kablea bera honda daiteke.', es: 'Un cable en el pasillo provoca tropiezos y caídas, y el propio cable se puede dañar.', en: 'A cable in the walkway causes trips and falls, and the cable itself can get damaged.' },
      fix: { eu: 'Bideratu kableak pasabidetik kanpo edo estali kable-babesarekin.', es: 'Llevar los cables fuera del pasillo o cubrirlos con un pasacables.', en: 'Route cables away from walkways or cover them with a cable protector.' } },
    { x: 1150, y: 740, r: 110,
      name: { eu: 'Ura ekipo elektrikoaren ondoan', es: 'Agua junto a equipos eléctricos', en: 'Water next to electrical equipment' },
      why: { eu: 'Ura eta elektrizitatea: elektrokuzio- eta zirkuitulabur-arriskua. Lurra irristakorra ere bada.', es: 'Agua y electricidad: riesgo de electrocución y cortocircuito. Además, el suelo resbala.', en: 'Water and electricity: risk of electrocution and short circuit. The floor is slippery too.' },
      fix: { eu: 'Lehortu ura berehala eta urrundu ekipo elektrikoak hezetasunetik.', es: 'Secar el agua enseguida y alejar los equipos eléctricos de la humedad.', en: 'Dry the water at once and keep electrical equipment away from moisture.' } },
    { x: 746, y: 205, r: 115,
      name: { eu: 'Eskaileraren goiko mailan zutik', es: 'De pie en lo alto de la escalera', en: 'Standing on top of the ladder' },
      why: { eu: 'Eskaileraren goiko aldean oreka galtzea erraza da: erorikoa.', es: 'En lo alto de la escalera es fácil perder el equilibrio y caer.', en: 'At the very top of a ladder it is easy to lose balance and fall.' },
      fix: { eu: 'Ez igo azken bi mailetara. Erabili eskailera luzeagoa edo plataforma bat.', es: 'No subir a los dos últimos peldaños. Usar una escalera más alta o una plataforma.', en: 'Never stand on the top two steps. Use a taller ladder or a platform.' } },
    { x: 1445, y: 520, r: 110,
      name: { eu: 'Larrialdi-irteera blokeatuta', es: 'Salida de emergencia bloqueada', en: 'Blocked emergency exit' },
      why: { eu: 'Kutxek irteera oztopatzen dute: larrialdi batean ezin da ebakuatu.', es: 'Las cajas tapan la salida: en una emergencia no se puede evacuar.', en: 'Boxes block the exit: in an emergency nobody can get out.' },
      fix: { eu: 'Larrialdi-irteerak beti libre eta garbi.', es: 'Mantener siempre libres las salidas de emergencia.', en: 'Keep emergency exits clear at all times.' } }
  ],
  safe: [
    { x: 1300, y: 500, r: 60, name: { eu: 'Su-itzalgailua', es: 'Extintor', en: 'Fire extinguisher' },
      why: { eu: 'Ondo dago: ikusgai, seinaleztatuta eta eskura.', es: 'Está bien: visible, señalizado y accesible.', en: 'Fine: visible, signposted and within reach.' } },
    { x: 942, y: 235, r: 50, name: { eu: 'Botikina', es: 'Botiquín', en: 'First aid kit' },
      why: { eu: 'Ondo dago: ikusgai eta eskura.', es: 'Está bien: visible y accesible.', en: 'Fine: visible and within reach.' } },
    { x: 245, y: 190, r: 90, name: { eu: 'Segurtasun-kartela', es: 'Cartel de seguridad', en: 'Safety sign' },
      why: { eu: 'Ondo dago: kaskoa erabiltzea derrigorrezkoa dela gogorarazten du.', es: 'Está bien: recuerda que el casco es obligatorio.', en: 'Fine: it reminds everyone that helmets are mandatory.' } },
    { x: 940, y: 525, r: 85, name: { eu: 'Makina', es: 'Máquina', en: 'Machine' },
      why: { eu: 'Ondo dago: babesa jarrita du eta larrialdi-geldialdiko botoia eskura.', es: 'Está bien: tiene la protección puesta y la seta de emergencia a mano.', en: 'Fine: the guard is on and the emergency stop is within reach.' } }
  ]
});
