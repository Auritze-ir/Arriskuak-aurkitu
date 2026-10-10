SCENES.push({
  id: 'kimika',
  icon: '🧪',
  title: { eu: 'Kimika laborategia', es: 'Laboratorio de química', en: 'Chemistry lab' },
  svg: `
  ${H.room('#eaf0f3', '#cdd5dc', '#bcc6cf', false)}
  ${H.lamp(400)}${H.lamp(900)}
  <!-- Wall shelf with bottles (one unlabelled) -->
  <rect x="600" y="258" width="480" height="12" rx="3" fill="#9aa6b2"/>
  <g>
    <rect x="630" y="196" width="40" height="62" rx="6" fill="#7fd1a7"/><rect x="638" y="182" width="24" height="16" fill="#5b6577"/><rect x="634" y="214" width="32" height="24" fill="#fff"/><polygon points="650,216 662,234 638,234" fill="#d7263d"/>
    <rect x="700" y="206" width="44" height="52" rx="6" fill="#f2c94c"/><rect x="710" y="192" width="24" height="16" fill="#5b6577"/><rect x="704" y="220" width="36" height="22" fill="#fff"/><rect x="710" y="226" width="24" height="4" fill="#1d2433"/>
    <rect x="770" y="190" width="40" height="68" rx="6" fill="#9bb7e8"/><rect x="778" y="176" width="24" height="16" fill="#5b6577"/><rect x="774" y="212" width="32" height="24" fill="#fff"/><rect x="780" y="220" width="20" height="4" fill="#1d2433"/>
    <rect x="840" y="200" width="44" height="58" rx="6" fill="#c792ea"/><rect x="850" y="186" width="24" height="16" fill="#5b6577"/>
    <rect x="910" y="194" width="40" height="64" rx="6" fill="#f4a261"/><rect x="918" y="180" width="24" height="16" fill="#5b6577"/><rect x="914" y="214" width="32" height="24" fill="#fff"/><polygon points="930,216 942,234 918,234" fill="#d7263d"/>
    <rect x="980" y="204" width="44" height="54" rx="6" fill="#7fd1a7"/><rect x="990" y="190" width="24" height="16" fill="#5b6577"/><rect x="984" y="218" width="36" height="22" fill="#fff"/><rect x="990" y="224" width="24" height="4" fill="#1d2433"/>
  </g>

  <!-- Fume hood (safe, empty) -->
  <rect x="1150" y="150" width="300" height="470" rx="8" fill="#d0d8df"/>
  <rect x="1170" y="200" width="260" height="250" fill="#3b4453"/>
  <rect x="1170" y="200" width="260" height="130" fill="#9ad3f0" opacity="0.45" stroke="#7a8796" stroke-width="4"/>
  <rect x="1170" y="160" width="260" height="26" rx="4" fill="#7a8796"/><circle cx="1410" cy="173" r="7" fill="#7fd1a7"/>
  <rect x="1170" y="450" width="260" height="18" fill="#aab4be"/>
  <rect x="1170" y="470" width="260" height="140" fill="#b8c2cc"/>
  <!-- Emergency shower + eyewash (safe) -->
  <rect x="1520" y="110" width="12" height="510" fill="#1e9e5a"/>
  <path d="M1526 110 h-40 v20" fill="none" stroke="#1e9e5a" stroke-width="12"/>
  <path d="M1460 130 h52 l-10 22 h-32z" fill="#1e9e5a"/>
  <rect x="1470" y="440" width="60" height="16" rx="8" fill="#1e9e5a"/><path d="M1470 440 q30 -30 60 0" fill="#bfe9d3"/>
  <rect x="1476" y="250" width="56" height="56" rx="6" fill="#1e9e5a"/><path d="M1490 262 v20 m-6 -12 q6 -14 12 0 M1514 262 l-6 10 m6 -10 l6 10" stroke="#fff" stroke-width="4" fill="none"/>

  <!-- Person pipetting by mouth (behind the bench) -->
  ${H.person(500, 610, { s: 0.95, coat: '#ffffff', goggles: true, hair: 'short', armL: [-30, -170], armR: [63, -221] })}
  <line x1="514" y1="372" x2="604" y2="452" stroke="#cfe8f5" stroke-width="7" stroke-linecap="round"/>
  <line x1="514" y1="372" x2="604" y2="452" stroke="#7a8796" stroke-width="2"/>
  <!-- Person heating without goggles or lab coat -->
  ${H.person(870, 610, { s: 0.95, shirt: '#d35d8e', hair: 'long', hairColor: '#2b1d14', armL: [-50, -160], armR: [80, -170] })}

  <!-- Bench -->
  <rect x="60" y="470" width="1060" height="26" fill="#3b4453"/>
  <rect x="80" y="496" width="1020" height="124" fill="#e1e7ec"/>
  <g stroke="#b8c2cc" stroke-width="3"><line x1="330" y1="500" x2="330" y2="620"/><line x1="600" y1="500" x2="600" y2="620"/><line x1="860" y1="500" x2="860" y2="620"/></g>
  <g fill="#7a8796"><rect x="190" y="540" width="40" height="8" rx="4"/><rect x="450" y="540" width="40" height="8" rx="4"/><rect x="710" y="540" width="40" height="8" rx="4"/><rect x="960" y="540" width="40" height="8" rx="4"/></g>
  <!-- Food and drink on the bench -->
  <rect x="160" y="420" width="44" height="50" rx="6" fill="#ffffff" stroke="#5b6577" stroke-width="3"/>
  <path d="M204 432 q22 0 22 16 q0 16 -22 16" fill="none" stroke="#5b6577" stroke-width="5"/>
  <path d="M172 410 q6 -10 0 -18 M188 410 q6 -10 0 -18" fill="none" stroke="#aab4be" stroke-width="3"/>
  <path d="M240 470 l20 -34 h70 l20 34 z" fill="#e3b26b"/><path d="M246 460 h98" stroke="#7fbf5a" stroke-width="7"/><path d="M250 450 h90" stroke="#d7263d" stroke-width="5"/>
  <!-- Beaker being pipetted -->
  <path d="M584 420 h44 v42 q0 8 -8 8 h-28 q-8 0 -8 -8z" fill="#cfe8f5" stroke="#7a8796" stroke-width="3"/>
  <rect x="587" y="444" width="38" height="22" fill="#e8b04b" opacity="0.8"/>
  <!-- Bunsen + beaker + fumes -->
  <g stroke="#5b6577" stroke-width="5"><line x1="930" y1="470" x2="944" y2="420"/><line x1="1000" y1="470" x2="986" y2="420"/><line x1="936" y1="420" x2="994" y2="420"/></g>
  <rect x="958" y="436" width="14" height="34" fill="#5b6577"/>
  <path d="M965 436 q-10 -14 0 -26 q10 12 0 26" fill="#5aa9f0"/>
  <path d="M942 372 h46 v40 q0 8 -8 8 h-30 q-8 0 -8 -8z" fill="#cfe8f5" stroke="#7a8796" stroke-width="3"/>
  <rect x="945" y="392" width="40" height="22" fill="#7fd17f"/>
  ${H.smoke(950, 350, 1.1, '#8fd18f')}
  <!-- Waste container (safe) -->
  <rect x="1040" y="640" width="70" height="86" rx="8" fill="#ffc20e"/>
  <rect x="1034" y="630" width="82" height="14" rx="4" fill="#d6a300"/>
  ${H.warn(1075, 684, 0.9)}
  <!-- Broken glass on the floor -->
  <g fill="#cfe8f5" stroke="#7a8796" stroke-width="3">
    <polygon points="360,770 392,752 384,790"/><polygon points="410,786 446,778 430,806"/><polygon points="342,800 372,794 360,816"/>
    <polygon points="452,752 470,770 444,774"/>
  </g>
  ${H.puddle(410, 800, 80, '#e8b04b')}
  `,
  hazards: [
    { x: 250, y: 440, r: 95,
      name: { eu: 'Jan eta edan laborategian', es: 'Comer y beber en el laboratorio', en: 'Food and drink in the lab' },
      why: { eu: 'Janaria eta edaria produktu kimikoekin kutsa daitezke eta irentsi.', es: 'La comida y la bebida se pueden contaminar con productos químicos e ingerirse.', en: 'Food and drink can get contaminated with chemicals and be swallowed.' },
      fix: { eu: 'Debekatuta dago laborategian jatea eta edatea. Jan horretarako dagoen lekuan.', es: 'Prohibido comer y beber en el laboratorio. Hacerlo en la zona destinada.', en: 'No eating or drinking in the lab. Use the designated break area.' } },
    { x: 530, y: 375, r: 62,
      name: { eu: 'Ahoz pipeteatzen', es: 'Pipetear con la boca', en: 'Pipetting by mouth' },
      why: { eu: 'Produktua ahora sar daiteke: intoxikazioa edo erredurak.', es: 'El producto puede llegar a la boca: intoxicación o quemaduras.', en: 'The liquid can reach the mouth: poisoning or burns.' },
      fix: { eu: 'Erabili beti propipeta edo pipeta automatikoa.', es: 'Usar siempre una propipeta o pipeta automática.', en: 'Always use a pipette filler or an automatic pipette.' } },
    { x: 862, y: 222, r: 55,
      name: { eu: 'Etiketarik gabeko botila', es: 'Frasco sin etiqueta', en: 'Unlabelled bottle' },
      why: { eu: 'Ez dakigu zer duen, ezta zer arrisku duen ere: nahasketa edo erabilera okerra.', es: 'No se sabe qué contiene ni qué peligros tiene: confusiones y mal uso.', en: 'Nobody knows what is inside or how dangerous it is: mix-ups and misuse.' },
      fix: { eu: 'Etiketatu ontzi guztiak: izena, arrisku-piktogramak eta data.', es: 'Etiquetar todos los envases: nombre, pictogramas de peligro y fecha.', en: 'Label every container: name, hazard pictograms and date.' } },
    { x: 1000, y: 280, r: 70,
      name: { eu: 'Lurrunak ke-kanpaitik kanpo', es: 'Vapores fuera de la vitrina', en: 'Fumes outside the fume hood' },
      why: { eu: 'Lurrun toxikoak arnasten dira; ke-kanpaia hutsik dago ondoan.', es: 'Se respiran vapores tóxicos, y la vitrina de gases está vacía al lado.', en: 'Toxic vapours are breathed in, while the fume hood next to it stands empty.' },
      fix: { eu: 'Berotu eta erabili produktu lurrunkorrak ke-kanpaiaren barruan.', es: 'Calentar y manipular productos volátiles dentro de la vitrina.', en: 'Heat and handle volatile products inside the fume hood.' } },
    { x: 870, y: 355, r: 62,
      name: { eu: 'Betaurreko eta txabusinik gabe', es: 'Sin gafas ni bata', en: 'No goggles or lab coat' },
      why: { eu: 'Zipriztinek begiak eta azala erre ditzakete; ile soltea sugarretik gertu dago.', es: 'Las salpicaduras pueden quemar ojos y piel; el pelo suelto está cerca de la llama.', en: 'Splashes can burn eyes and skin; loose hair is close to the flame.' },
      fix: { eu: 'Txabusina, babes-betaurrekoak eta ilea bilduta beti.', es: 'Siempre bata, gafas de protección y el pelo recogido.', en: 'Always wear a lab coat and goggles, and tie long hair back.' } },
    { x: 405, y: 790, r: 95,
      name: { eu: 'Beira hautsia eta isuria lurrean', es: 'Vidrio roto y derrame en el suelo', en: 'Broken glass and spill on the floor' },
      why: { eu: 'Ebakiak, irristatzea eta produktu kimikoarekiko kontaktua.', es: 'Cortes, resbalones y contacto con el producto químico.', en: 'Cuts, slips and contact with the chemical.' },
      fix: { eu: 'Bildu beira eskuilarekin (ez eskuz), neutralizatu isuria eta bota hondakina beirarentzako ontzira.', es: 'Recoger el vidrio con escoba (nunca con la mano), neutralizar el derrame y tirar al contenedor de vidrio.', en: 'Sweep up the glass (never by hand), neutralise the spill and use the glass waste bin.' } }
  ],
  safe: [
    { x: 1300, y: 330, r: 120, name: { eu: 'Ke-kanpaia', es: 'Vitrina de gases', en: 'Fume hood' },
      why: { eu: 'Ondo dago: piztuta eta prest dago. Lurrun toxikoekin hemen lan egin behar da.', es: 'Está bien: encendida y lista. Aquí se debe trabajar con vapores tóxicos.', en: 'Fine: it is on and ready. Work with toxic vapours should happen here.' } },
    { x: 1500, y: 290, r: 100, name: { eu: 'Larrialdi-dutxa eta begi-garbigailua', es: 'Ducha de emergencia y lavaojos', en: 'Emergency shower and eyewash' },
      why: { eu: 'Ondo dago: seinaleztatuta eta oztoporik gabe.', es: 'Está bien: señalizada y sin obstáculos.', en: 'Fine: signposted and unobstructed.' } },
    { x: 1075, y: 680, r: 55, name: { eu: 'Hondakin kimikoen ontzia', es: 'Contenedor de residuos químicos', en: 'Chemical waste container' },
      why: { eu: 'Ondo dago: hondakinak bereizita eta etiketatuta.', es: 'Está bien: residuos separados y etiquetados.', en: 'Fine: waste is separated and labelled.' } }
  ]
});
